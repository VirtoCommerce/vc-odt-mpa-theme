import Vue from "vue";
import Component from "vue-class-component";
import { Route, RawLocation } from 'vue-router';
import { namespace } from "vuex-class";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { BvTableCtxObject } from "bootstrap-vue";
import { IPaymentSearchCriteria, IPaymentSearchResult, PaymentSearchCriteria } from 'core/api/api-clients';
import { pageSizes, invoicesStatuses, baseUrl, storeName, locale, sortDescending, sortAscending } from "core/constants";
import { PaymentSearchQuery } from 'core/models/search/extensions/payment-search-query';
import { QueryBuilder } from 'core/services/query-builder.service';
import InvoicesFilter from "libs/invoice/components/invoices-filter/index.vue";
import { SET_INVOICES_SEARCH_CRITERIA } from 'libs/invoice/store/invoices-list/definitions';
import "core/models/search/extensions/payment-search-criteria";

const invoicesListModule = namespace('invoicesListModule');

@Component({
  components: {
    InvoicesFilter
  },
  beforeRouteUpdate: function (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: AccountInvoices) => any) | void) => void) {
    (this as AccountInvoices).buildSearchCriteria(to);
    next();
  }
})
export default class AccountInvoices extends Vue {
  @invoicesListModule.Getter("isLoading")
  private isLoading!: boolean;

  @invoicesListModule.Getter("columns")
  private columns!: boolean;

  @invoicesListModule.Getter("searchCriteria")
  private searchCriteria!: IPaymentSearchCriteria;

  @invoicesListModule.Action(SET_INVOICES_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: IPaymentSearchCriteria) => void;

  @invoicesListModule.Getter("invoices")
  private invoices!: IPaymentSearchResult;

  downloadIcon = faSave;

  pageSizes = pageSizes;

  availableInvoicesStatuses = invoicesStatuses;

  queryBuilder = new QueryBuilder(PaymentSearchCriteria, PaymentSearchQuery);

  mounted() {
    this.buildSearchCriteria(this.$route, this.searchCriteria);
  }

  buildSearchCriteria(route: Route, initialSearchCriteria?: IPaymentSearchCriteria) {
    const searchCriteria = this.queryBuilder.parseQuery(route.query);
    this.setSearchCriteria({
      ...initialSearchCriteria,
      ...searchCriteria
    });
  }

  pageChanged(pageNumber: number) {
    this.searchCriteriaChanged({ ...this.searchCriteria, pageNumber });
  }

  pageSizeChanged(pageSize: number) {
    this.searchCriteriaChanged({ ...this.searchCriteria, pageNumber: 1, pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? sortDescending : sortAscending;
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const searchCriteria = { ...this.searchCriteria, pageNumber: 1, sort: sortExpression };
    this.searchCriteriaChanged(searchCriteria);
  }

  checkActivePageSize(pageSize: number) {
    return pageSize == this.searchCriteria.pageSize ? true : false;
  }

  searchCriteriaChanged(searchCriteria: IPaymentSearchCriteria) {
    const query = this.queryBuilder.buildQuery(new PaymentSearchCriteria(searchCriteria));
    this.$router.push({
      ...this.$route,
      query
    });
  }

  getInvoicePdf(orderNumber: string) {
    const url = baseUrl + `/${storeName}/${locale}/storefrontapi/orders/${orderNumber}/invoice`;
    window.open(url, '_blank');
  }

}
