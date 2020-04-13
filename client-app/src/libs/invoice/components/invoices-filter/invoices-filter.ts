import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import i18n from "@i18n";
import { IPaymentSearchCriteria } from 'core/api/api-clients';
import { locale } from "core/constants";

@Component
export default class InvoicesFilter extends Vue {
  @Prop()
  searchCriteria!: IPaymentSearchCriteria;

  @Prop()
  availableInvoicesStatuses!: string[];

  allStatusesSelected = false;

  isDateValid: boolean | null = null;

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

  emitChanges(searchCriteria: IPaymentSearchCriteria) {
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
    this.datepickerLabels = i18n.te("account.invoices.datepicker") ? i18n.t("account.invoices.datepicker") : {};
  }

  getCurrentStatusLabel(): TranslateResult {
    if (this.allStatusesSelected || !this.searchCriteria.statuses?.length) {
      return i18n.t("account.invoices.status-filter.all");
    } else {
      if (this.searchCriteria.statuses.length == 1) {
        return this.searchCriteria.statuses[0];
      } else return "...";
    }
  }

  selectedStatusesChanged(selectedStatuses: string[]) {
    this.allStatusesSelected = selectedStatuses.length === this.availableInvoicesStatuses.length;
    const searchCriteria = { ...this.searchCriteria, statuses: selectedStatuses };
    this.emitChanges(searchCriteria);
  }

  toggleAllStatuses(checked: boolean) {
    const searchCriteria: IPaymentSearchCriteria = { ...this.searchCriteria, statuses: checked ? this.availableInvoicesStatuses : [] };
    this.emitChanges(searchCriteria);
  }

  private prepareEndDate(endDate?: Date): Date | undefined {
    return endDate != null ? this.$moment(endDate).add(1, "days").subtract(1, "seconds").toDate() : endDate;
  }
}
