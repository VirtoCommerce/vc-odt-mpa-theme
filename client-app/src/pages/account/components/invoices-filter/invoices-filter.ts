import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import i18n from "@i18n";
import { InvoicesListFilters } from "@account/store/modules/invoices-list/types";
import { locale } from "@common/constants";

@Component
export default class InvoicesFilter extends Vue {
  @Prop()
  invoicesFilter!: InvoicesListFilters;

  @Prop()
  availableInvoicesStatuses!: string[];

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  allStatusesSelected = false;

  selectedStatuses: string[] = [];

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

  faAngleUp = faAngleUp;

  faAngleDown = faAngleDown;

  showStatusDropdown = false;

  emitChanges(updatedFilters: InvoicesListFilters) {
    this.$emit("filtersChanged", updatedFilters);
  }

  mounted() {
    this.getDatepickerLocalization();
  }

  dateChanged() {
    if (this.startDate && this.endDate) {
      this.isDateValid = this.startDate <= this.endDate;
      if (this.isDateValid) {
        const updatedFilters = { ...this.invoicesFilter, startDate: this.startDate, endDate: this.prepareEndDate() };
        this.emitChanges(updatedFilters);
      }
    } else {
      this.endDate == null && this.startDate == null ? (this.isDateValid = null) : (this.isDateValid = true);
      const updatedFilters = {
        ...this.invoicesFilter,
        startDate: this.startDate,
        endDate: this.endDate ? this.prepareEndDate() : undefined
      };
      this.emitChanges(updatedFilters);
    }
  }

  changeStartDate(date: Date) {
    this.startDate = date;
    this.dateChanged();
  }

  changeEndDate(date: Date) {
    this.endDate = date;
    this.dateChanged();
  }

  getDatepickerLocalization() {
    typeof i18n.t(`account.invoices.datepicker`) === "string"
      ? (this.datepickerLabels = {})
      : (this.datepickerLabels = i18n.t(`account.invoices.datepicker`));
  }

  getCurrentStatusLabel(): TranslateResult {
    if (this.allStatusesSelected || this.invoicesFilter.statuses.length == 2) {
      return i18n.t("account.invoices.status-filter.all");
    } else return this.invoicesFilter.statuses[0];
  }

  selectedStatusesChanged(selectedStatuses: string[]) {
    selectedStatuses.length != this.availableInvoicesStatuses.length
      ? (this.allStatusesSelected = false)
      : (this.allStatusesSelected = true);
    const updatedFilters = { ...this.invoicesFilter, statuses: selectedStatuses };
    this.emitChanges(updatedFilters);
  }

  toggleAllStatuses(checked: boolean) {
    const updatedFilters = { ...this.invoicesFilter, statuses: this.availableInvoicesStatuses };
    checked ? (this.selectedStatuses = this.availableInvoicesStatuses) : (this.selectedStatuses = []);
    this.emitChanges(updatedFilters);
  }

  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
  }

  private prepareEndDate(): Date {
    return this.$moment(this.endDate)
      .add(1, "days")
      .subtract(1, "seconds")
      .toDate();
  }
}
