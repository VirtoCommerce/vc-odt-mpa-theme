import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import i18n from "@i18n";
import { OrdersListFilters } from "@account/store/modules/orders-list/types";
import { locale } from "@common/constants";

@Component
export default class OrderFilter extends Vue {
  @Prop()
  ordersFilter!: OrdersListFilters;

  @Prop()
  availableOrderStatuses!: string[];

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  allStatusesSelected = false;

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

  faAngleUp = faAngleUp;

  faAngleDown = faAngleDown;

  showStatusDropdown = false;

  emitChanges(updatedFilters: OrdersListFilters) {
    this.$emit("filtersChanged", updatedFilters);
  }

  mounted() {
    this.getDatepickerLocalization();
  }

  dateChanged() {
    if (this.startDate && this.endDate) {
      this.isDateValid = this.startDate <= this.endDate;
      if (this.isDateValid) {
        const updatedFilters = { ...this.ordersFilter, startDate: this.startDate, endDate: this.prepareEndDate() };
        this.emitChanges(updatedFilters);
      }
    } else {
      this.endDate == null && this.startDate == null ? (this.isDateValid = null) : (this.isDateValid = true);
      const updatedFilters = {
        ...this.ordersFilter,
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
    typeof i18n.t(`account.orders.datepicker`) === "string"
      ? (this.datepickerLabels = {})
      : (this.datepickerLabels = i18n.t(`account.orders.datepicker`));
  }

  getCurrentStatusLabel(): TranslateResult {
    if (this.allStatusesSelected || this.ordersFilter.statuses.length == 0) {
      return i18n.t("account.orders.status-filter.all");
    } else {
      if (this.ordersFilter.statuses.length == 1) {
        return this.ordersFilter.statuses[0];
      } else return "...";
    }
  }

  changeKeyword(value: string) {
    const updatedFilters = { ...this.ordersFilter, keyword: value };
    this.emitChanges(updatedFilters);
  }

  selectedStatusesChanged(selectedStatuses: string[]) {
    selectedStatuses.length != this.availableOrderStatuses.length
      ? (this.allStatusesSelected = false)
      : (this.allStatusesSelected = true);
    const updatedFilters = { ...this.ordersFilter, statuses: selectedStatuses };
    this.emitChanges(updatedFilters);
  }

  toggleAllStatuses(checked: boolean) {
    let updatedFilters: OrdersListFilters;
    checked
      ? (updatedFilters = { ...this.ordersFilter, statuses: this.availableOrderStatuses })
      : (updatedFilters = { ...this.ordersFilter, statuses: [] });
    this.emitChanges(updatedFilters);
  }

  toggleStatusDropdown(){
    this.showStatusDropdown = !this.showStatusDropdown;
  }

  private prepareEndDate(): Date {
    return this.$moment(this.endDate)
      .add(1, "days")
      .subtract(1, "seconds")
      .toDate();
  }
}
