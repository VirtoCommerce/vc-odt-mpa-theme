import Vue from "vue";
import Component from "vue-class-component";
import { Route, RawLocation } from 'vue-router';
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import OrderFilter from "@account/components/orders-filter/index.vue";
import { FETCH_ORDERS, SET_ORDERS_SEARCH_CRITERIA, FETCH_SELECTED_ORDER } from "@account/store/modules/orders-list/definitions";
import { CustomerOrder, ICustomerOrderSearchResult, IOrderSearchCriteria, ICustomerOrder, OrderSearchCriteria } from "@common/api/api-clients";
import { pageSizes, ordersStatuses } from "@common/constants";
import { OrderSearchQuery } from "@common/models/search/order-search-query";
import { QueryBuilder } from '@common/services/query-builder.service';
import AccountOrderDetailsModal from "../account-order-details-modal/index.vue";
import "@common/models/search/order-search-criteria";

const ordersListModule = namespace("ordersListModule");

@Component({
  components: {
    AccountOrderDetailsModal,
    OrderFilter
  },
  beforeRouteUpdate: function (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: AccountOrders) => any) | void) => void) {
    (this as AccountOrders).routeChanged(to);
    next();
  }
})
export default class AccountOrders extends Vue {
  @ordersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @ordersListModule.Getter("columns")
  private columns!: boolean;

  @ordersListModule.Getter("searchCriteria")
  private searchCriteria!: IOrderSearchCriteria;

  @ordersListModule.Action(SET_ORDERS_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: IOrderSearchCriteria) => void;

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => ICustomerOrderSearchResult;

  @ordersListModule.Getter("orders")
  private orders!: ICustomerOrderSearchResult;

  @ordersListModule.Getter("selectedOrder")
  private selectedOrder!: CustomerOrder;

  @ordersListModule.Action(FETCH_SELECTED_ORDER)
  private fetchSelectedOrder!: (orderId: string) => ICustomerOrder;

  pageSizes = pageSizes;

  availableOrderStatuses = ordersStatuses;

  queryBuilder = new QueryBuilder(OrderSearchCriteria, OrderSearchQuery);

  mounted() {
    this.routeChanged(this.$route);
  }

  routeChanged(route: Route) {
    const searchCriteria = this.queryBuilder.parseQuery(route.query);
    this.setSearchCriteria({
      ...this.searchCriteria,
      ...searchCriteria
    });
  }

  pageChanged(page: number) {
    this.searchCriteriaChanged({ ...this.searchCriteria, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.searchCriteriaChanged({ ...this.searchCriteria, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const searchCriteria = { ...this.searchCriteria, pageNumber: 1, sort: sortExpression };
    this.searchCriteriaChanged(searchCriteria);
  }

  openOrderDetails(orderId: string) {
    this.fetchSelectedOrder(orderId);
    this.$bvModal.show("orderDetailsModal");
  }

  searchCriteriaChanged(searchCriteria: IOrderSearchCriteria) {
    const query = this.queryBuilder.buildQuery(new OrderSearchCriteria(searchCriteria));
    this.$router.push({
      ...this.$route,
      query
    });
  }
}
