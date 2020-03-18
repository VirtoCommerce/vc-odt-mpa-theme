import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import { SET_INVOICES_LIST_CONFIG, FETCH_INVOICES } from '@account/store/modules/invoices-list/definitions';
import { InvoicesList, InvoicesListConfig } from '@account/store/modules/invoices-list/types';
import { pageSizes, invoicesStatuses } from "@common/constants";

const invoicesListModule = namespace('invoicesListModule');

@Component
export default class AccountInvoices extends Vue {
  @invoicesListModule.Getter("InvoicesList")
  private invoicesList!: InvoicesList;

  @invoicesListModule.Getter("isLoading")
  private isLoading!: boolean;

  @invoicesListModule.Action(FETCH_INVOICES)
  private fetchInvoices!: () => InvoicesList;

  @invoicesListModule.Action(SET_INVOICES_LIST_CONFIG)
  private setListConfig!: (listConfig: InvoicesListConfig) => void;

  pageSizes = pageSizes;

  availableInvoicesStatuses = invoicesStatuses;

  mounted() {
    this.fetchInvoices();
  }

  pageChanged(page: number) {
    this.setListConfig({ ...this.invoicesList.listConfig, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.setListConfig({ ...this.invoicesList.listConfig, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const listConfig = { ...this.invoicesList.listConfig, pageNumber: 1 };
    listConfig.filters = { ...this.invoicesList.listConfig.filters, sort: sortExpression };
    this.setListConfig(listConfig);
  }

}
