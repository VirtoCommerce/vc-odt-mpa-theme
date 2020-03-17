import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import OrderFilter from "@account/components/orders-filter/index.vue";
import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig, OrdersListFilters } from "@account/store/modules/orders-list/types";
import { CustomerOrder } from "@common/api/api-clients";
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
  @ordersListModule.Getter("ordersList")
  private ordersList!: OrdersList;

  @ordersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList;

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig: OrdersListConfig) => void;

  selectedOrder: CustomerOrder | null = null;

  selectedOrderId: string | null = null;

  pageSizes = pageSizes;

  availableOrderStatuses = ordersStatuses;

  mounted() {
    this.fetchOrders();
  }

  pageChanged(page: number) {
    this.setListConfig({ ...this.ordersList.listConfig, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.setListConfig({ ...this.ordersList.listConfig, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const listConfig = { ...this.ordersList.listConfig, pageNumber: 1 };
    listConfig.filters = { ...this.ordersList.listConfig.filters, sort: sortExpression };
    this.setListConfig(listConfig);
  }

  openOrderDetails(orderId: string) {
    this.selectedOrderId = orderId;
    this.$bvModal.show("orderDetailsModal");
  }

  filtersChanged(filters: OrdersListFilters) {
    this.setListConfig({ ...this.ordersList.listConfig, filters });
  }

}
