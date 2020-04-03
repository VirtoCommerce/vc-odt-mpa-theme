import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import OrderFilter from "@account/components/orders-filter/index.vue";
import { FETCH_ORDERS, SET_ORDERS_SEARCH_CRITERIA, FETCH_SELECTED_ORDER } from "@account/store/modules/orders-list/definitions";
import { CustomerOrder, ICustomerOrderSearchResult, IOrderSearchCriteria } from "@common/api/api-clients";
import { pageSizes, ordersStatuses } from "@common/constants";
import AccountOrderDetailsModal from "../account-order-details-modal/index.vue";

const ordersListModule = namespace("ordersListModule");

@Component({
  components: {
    AccountOrderDetailsModal,
    OrderFilter
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

  mounted() {
    this.fetchOrders();
  }

  pageChanged(page: number) {
    this.setSearchCriteria({ ...this.searchCriteria, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.setSearchCriteria({ ...this.searchCriteria, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const searchCriteria = { ...this.searchCriteria, pageNumber: 1, sort: sortExpression };
    this.setSearchCriteria(searchCriteria);
  }

  openOrderDetails(orderId: string) {
    this.fetchSelectedOrder(orderId);
    this.$bvModal.show("orderDetailsModal");
  }

  searchCriteriaChanged(searchCriteria: IOrderSearchCriteria) {
    this.setSearchCriteria({ ...this.searchCriteria, ...searchCriteria });
  }
}
