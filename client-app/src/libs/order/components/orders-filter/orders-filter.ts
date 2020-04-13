import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import i18n from "@i18n";
import { IOrderSearchCriteria } from 'core/api/api-clients';
import { locale } from "core/constants";

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
    this.setDatepickerLocalization();
  }

  dateChanged(startDate?: Date, endDate?: Date) {
    if (startDate && endDate) {
      this.isDateValid = startDate <= endDate;
      if (this.isDateValid) {
        const searchCriteria = { ...this.searchCriteria, startDate, endDate };
        this.emitChanges(searchCriteria);
      }
    } else {
      this.isDateValid = endDate != null || startDate != null || null;
      const searchCriteria = {
        ...this.searchCriteria,
        startDate,
        endDate
      };
      this.emitChanges(searchCriteria);
    }
  }

  changeStartDate(date?: Date) {
    if (this.searchCriteria.startDate?.getTime() !== date?.getTime()){
      this.dateChanged(date, this.searchCriteria.endDate);
    }
  }

  changeEndDate(date?: Date) {
    if (this.searchCriteria.endDate?.getTime() !== this.prepareEndDate(date)?.getTime()) {
      this.dateChanged(this.searchCriteria.startDate, this.prepareEndDate(date));
    }
  }

  setDatepickerLocalization() {
    this.datepickerLabels = i18n.te("account.orders.datepicker") ? i18n.t("account.orders.datepicker") : {};
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

  selectedStatusesChanged(selectedStatuses: string[]) {
    this.allStatusesSelected = selectedStatuses.length === this.availableOrderStatuses.length;
    const searchCriteria = { ...this.searchCriteria, statuses: selectedStatuses };
    this.emitChanges(searchCriteria);
  }

  toggleAllStatuses(checked: boolean) {
    const searchCriteria: IOrderSearchCriteria = { ...this.searchCriteria, statuses: checked ? this.availableOrderStatuses : [] };
    this.emitChanges(searchCriteria);
  }

  changeKeyword(keyword: string) {
    const searchCriteria = { ...this.searchCriteria, keyword };
    this.emitChanges(searchCriteria);
  }

  private prepareEndDate(endDate?: Date): Date | undefined {
    return endDate != null ? this.$moment(endDate).add(1, "days").subtract(1, "seconds").toDate() : endDate;
  }
}
