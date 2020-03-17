import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import PaymentsFilter from "@account/components/payments-filter/index.vue";
import { SET_PAYMENTS_LIST_CONFIG, FETCH_PAYMENTS } from '@account/store/modules/payments-list/definitions';
import { PaymentsList, PaymentsListConfig, PaymentsListFilters } from '@account/store/modules/payments-list/types';
import { pageSizes } from "@common/constants";

const paymentsListModule = namespace('paymentsListModule');

@Component({
  components: {
    PaymentsFilter
  }
})
export default class AccountPayments extends Vue {
  @paymentsListModule.Getter("paymentsList")
  private paymentsList!: PaymentsList;

  @paymentsListModule.Getter("isLoading")
  private isLoading!: boolean;

  @paymentsListModule.Action(FETCH_PAYMENTS)
  private fetchPayments!: () => PaymentsList;

  @paymentsListModule.Action(SET_PAYMENTS_LIST_CONFIG)
  private setListConfig!: (listConfig: PaymentsListConfig) => void;

  pageSizes = pageSizes;

  mounted() {
    this.fetchPayments();
  }

  pageChanged(page: number) {
    this.setListConfig({ ...this.paymentsList.listConfig, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.setListConfig({ ...this.paymentsList.listConfig, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const listConfig = { ...this.paymentsList.listConfig, pageNumber: 1 };
    listConfig.filters = { ...this.paymentsList.listConfig.filters, sort: sortExpression };
    this.setListConfig(listConfig);
  }

  filtersChanged(filters: PaymentsListFilters){
    this.setListConfig({ ...this.paymentsList.listConfig, filters });
  }

}
