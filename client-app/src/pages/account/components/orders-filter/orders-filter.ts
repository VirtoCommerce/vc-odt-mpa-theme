import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import i18n from "@i18n";
import { IOrderSearchCriteria } from '@common/api/api-clients';
import { locale } from "@common/constants";

@Component
export default class OrderFilter extends Vue {
  @Prop()
  searchCriteria!: IOrderSearchCriteria;

  @Prop()
  availableOrderStatuses!: string[];

  allStatusesSelected = false;

  isDateValid: boolean | null = null;

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

  emitChanges(searchCriteria: IOrderSearchCriteria) {
    this.$emit("searchCriteriaChanged", searchCriteria);
  }

  mounted() {
    this.getDatepickerLocalization();
  }

  dateChanged() {
    if (this.searchCriteria.startDate && this.searchCriteria.endDate) {
      this.isDateValid = this.searchCriteria.startDate <= this.searchCriteria.endDate;
      if (this.isDateValid) {
        const searchCriteria = { ...this.searchCriteria, startDate: this.searchCriteria.startDate, endDate: this.prepareEndDate() };
        this.emitChanges(searchCriteria);
      }
    } else {
      this.searchCriteria.endDate == null && this.searchCriteria.startDate == null ? (this.isDateValid = null) : (this.isDateValid = true);
      const searchCriteria = {
        ...this.searchCriteria,
        startDate: this.searchCriteria.startDate,
        endDate: this.searchCriteria.endDate ? this.prepareEndDate() : undefined
      };
      this.emitChanges(searchCriteria);
    }
  }

  changeStartDate(date: Date) {
    this.searchCriteria.startDate = date;
    this.dateChanged();
  }

  changeEndDate(date: Date) {
    this.searchCriteria.endDate = date;
    this.dateChanged();
  }

  getDatepickerLocalization() {
    if (i18n.te("account.orders.datepicker")) {
      this.datepickerLabels = i18n.t("account.orders.datepicker");
    } else{
      this.datepickerLabels = {};
    }
  }

  getCurrentStatusLabel(): TranslateResult {
    if (this.allStatusesSelected || !this.searchCriteria.statuses?.length) {
      return i18n.t("account.orders.status-filter.all");
    } else {
      if (this.searchCriteria.statuses.length == 1) {
        return this.searchCriteria.statuses[0];
      } else return "...";
    }
  }

  changeKeyword(value: string) {
    const searchCriteria = { ...this.searchCriteria, keyword: value };
    this.emitChanges(searchCriteria);
  }

  selectedStatusesChanged(selectedStatuses: string[]) {
    selectedStatuses.length != this.availableOrderStatuses.length
      ? (this.allStatusesSelected = false)
      : (this.allStatusesSelected = true);
    const searchCriteria = { ...this.searchCriteria, statuses: selectedStatuses };
    this.emitChanges(searchCriteria);
  }

  toggleAllStatuses(checked: boolean) {
    let searchCriteria: IOrderSearchCriteria;
    checked
      ? (searchCriteria = { ...this.searchCriteria, statuses: this.availableOrderStatuses })
      : (searchCriteria = { ...this.searchCriteria, statuses: [] });
    this.emitChanges(searchCriteria);
  }

  private prepareEndDate(): Date {
    return this.$moment(this.searchCriteria.endDate)
      .add(1, "days")
      .subtract(1, "seconds")
      .toDate();
  }
}
