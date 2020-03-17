import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import i18n from "@i18n";
import { PaymentsListFilters } from "@account/store/modules/payments-list/types";
import { locale } from "@common/constants";

@Component
export default class PaymentsFilter extends Vue {
  @Prop()
  paymentsFilter!: PaymentsListFilters;

  // @Prop()
  // availablePaymentStatuses!: string[];

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  //allStatusesSelected = false;

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

  faAngleUp = faAngleUp;

  faAngleDown = faAngleDown;

  //showStatusDropdown = false;

  emitChanges(updatedFilters: PaymentsListFilters) {
    this.$emit("filtersChanged", updatedFilters);
  }

  mounted() {
    this.getDatepickerLocalization();
  }

  dateChanged() {
    if (this.startDate && this.endDate) {
      this.isDateValid = this.startDate <= this.endDate;
      if (this.isDateValid) {
        const updatedFilters = { ...this.paymentsFilter, startDate: this.startDate, endDate: this.prepareEndDate() };
        this.emitChanges(updatedFilters);
      }
    } else {
      this.endDate == null && this.startDate == null ? (this.isDateValid = null) : (this.isDateValid = true);
      const updatedFilters = {
        ...this.paymentsFilter,
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

  // getCurrentStatusLabel(): TranslateResult {
  //   if (this.allStatusesSelected || this.paymentsFilter.statuses.length == 0) {
  //     return i18n.t("account.orders.status-filter.all");
  //   } else {
  //     if (this.paymentsFilter.statuses.length == 1) {
  //       return this.paymentsFilter.statuses[0];
  //     } else return "...";
  //   }
  // }

  // changeKeyword(value: string) {
  //   const updatedFilters = { ...this.paymentsFilter, keyword: value };
  //   this.emitChanges(updatedFilters);
  // }

  // selectedStatusesChanged(selectedStatuses: string[]) {
  //   selectedStatuses.length != this.availableOrderStatuses.length
  //     ? (this.allStatusesSelected = false)
  //     : (this.allStatusesSelected = true);
  //   const updatedFilters = { ...this.paymentsFilter, statuses: selectedStatuses };
  //   this.emitChanges(updatedFilters);
  // }

  // toggleAllStatuses(checked: boolean) {
  //   let updatedFilters: PaymentsListFilters;
  //   checked
  //     ? (updatedFilters = { ...this.paymentsFilter, statuses: this.availableOrderStatuses })
  //     : (updatedFilters = { ...this.paymentsFilter, statuses: [] });
  //   this.emitChanges(updatedFilters);
  // }

  // toggleStatusDropdown(){
  //   this.showStatusDropdown = !this.showStatusDropdown;
  // }

  private prepareEndDate(): Date {
    return this.$moment(this.endDate)
      .add(1, "days")
      .subtract(1, "seconds")
      .toDate();
  }
}
