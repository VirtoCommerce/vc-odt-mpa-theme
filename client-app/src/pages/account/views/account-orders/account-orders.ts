import Vue from "vue";
import Component from "vue-class-component";
import { Route, RawLocation } from 'vue-router';
import { namespace } from "vuex-class";
import { BvTableCtxObject, BvTableFieldArray } from "bootstrap-vue";
import { ICustomerOrderSearchResult, IOrderSearchCriteria, ICustomerOrder, OrderSearchCriteria } from "core/api/api-clients";
import { pageSizes, ordersStatuses, sortDescending, sortAscending } from "core/constants";
import { OrderSearchQuery } from "core/models/search/extensions/order-search-query";
import { QueryBuilder } from 'core/services/query-builder.service';
import OrderDetailsModal from "libs/order/components/order-details-modal/index.vue";
import OrderFilter from "libs/order/components/orders-filter/index.vue";
import { SET_ORDERS_SEARCH_CRITERIA, FETCH_SELECTED_ORDER, CLEAR_SELECTED_ORDER } from "libs/order/store/orders-list/definitions";
import "core/models/search/extensions/order-search-criteria";

const ordersListModule = namespace("ordersListModule");

@Component({
  components: {
    OrderDetailsModal,
    OrderFilter
  },
  beforeRouteUpdate: function (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: AccountOrders) => any) | void) => void) {
    (this as AccountOrders).buildSearchCriteria(to);
    next();
  }
})
export default class AccountOrders extends Vue {
  @ordersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @ordersListModule.Getter("columns")
  private columns!: BvTableFieldArray;

  @ordersListModule.Getter("searchCriteria")
  private searchCriteria!: IOrderSearchCriteria;

  @ordersListModule.Action(SET_ORDERS_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: IOrderSearchCriteria) => void;

  @ordersListModule.Getter("orders")
  private orders!: ICustomerOrderSearchResult;

  @ordersListModule.Getter("selectedOrder")
  private selectedOrder!: ICustomerOrder | null;

  @ordersListModule.Action(FETCH_SELECTED_ORDER)
  private fetchSelectedOrder!: (orderId: string) => ICustomerOrder;

  @ordersListModule.Action(CLEAR_SELECTED_ORDER)
  private clearSelectedOrder!: () => void;

  pageSizes = pageSizes;

  availableOrderStatuses = ordersStatuses;

  queryBuilder = new QueryBuilder(OrderSearchCriteria, OrderSearchQuery);

  mounted() {
    this.buildSearchCriteria(this.$route, this.searchCriteria);
  }

  orderDetailsModalHided() {
    this.clearSelectedOrder();
  }

  buildSearchCriteria(route: Route, initialSearchCriteria?: IOrderSearchCriteria) {
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

  searchCriteriaChanged(searchCriteria: IOrderSearchCriteria) {
    const query = this.queryBuilder.buildQuery(new OrderSearchCriteria(searchCriteria));
    this.$router.push({
      ...this.$route,
      query
    });
  }

  openOrderDetails(orderId: string) {
    this.fetchSelectedOrder(orderId);
    this.$bvModal.show("orderDetailsModal");
  }
}
