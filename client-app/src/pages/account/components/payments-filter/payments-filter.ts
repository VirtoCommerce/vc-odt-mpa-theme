import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import i18n from "@i18n";
import { PaymentsListFilters } from "@account/store/modules/payments-list/types";
import { locale } from "@common/constants";

@Component
export default class PaymentsFilter extends Vue {
  @Prop()
  paymentsFilter!: PaymentsListFilters;

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

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
    typeof i18n.t(`account.payments.datepicker`) === "string"
      ? (this.datepickerLabels = {})
      : (this.datepickerLabels = i18n.t(`account.payments.datepicker`));
  }

  private prepareEndDate(): Date {
    return this.$moment(this.endDate)
      .add(1, "days")
      .subtract(1, "seconds")
      .toDate();
  }
}
