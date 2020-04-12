import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import i18n from "@i18n";
import { BvTableFieldArray } from "bootstrap-vue";
import AddDraftModal from "libs/order-draft/components/add-draft-modal/index.vue";
import DraftsFilter from "libs/order-draft/components/drafts-filter/index.vue";
import { AddDraft } from "libs/order-draft/models/add-draft";
import { ChangeListItem } from 'libs/order-draft/models/change-list-item';
import { DeleteDraftLineItem } from 'libs/order-draft/models/delete-draft-line-item';
import { FETCH_DRAFTS, SET_DRAFTS_SEARCH_CRITERIA, ADD_DRAFT, DELETE_DRAFT, SET_SELECTED_DRAFT, DELETE_ITEM_FROM_DRAFT, CLEAR_DRAFT, CHANGE_DRAFT_ITEM_QUANTITY } from "libs/order-draft/store/drafts-list/definitions";
import CartHeader from "libs/shopping-cart/components/cart-header/index.vue";
import CartItemsList from "libs/shopping-cart/components/cart-items-list/index.vue";
import { ICartSearchCriteria, IShoppingCartSearchResult, CartSearchCriteria, ShoppingCart, IShoppingCart, CartLineItem, AddCartItem, ChangeCartItemQty } from "@common/api/api-clients";
import { pageSizes, locale, storeName } from "@common/constants";
import { listClient } from '@common/services/api-clients.service';
import { QueryBuilder } from "@common/services/query-builder.service";

const draftsListModule = namespace("draftsListModule");

@Component({
  components: {
    AddDraftModal,
    DraftsFilter,
    CartHeader,
    CartItemsList
  }
  // beforeRouteUpdate: function (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: AccountDrafts) => any) | void) => void) {
  //   (this as AccountDrafts).routeChanged(to);
  //   next();
  // }
})
export default class AccountDrafts extends Vue {
  @draftsListModule.Getter("columns")
  private columns!: BvTableFieldArray;

  @draftsListModule.Getter("isLoading")
  private isLoading!: boolean;

  @draftsListModule.Getter("searchCriteria")
  private searchCriteria!: ICartSearchCriteria;

  @draftsListModule.Getter("drafts")
  private drafts!: IShoppingCartSearchResult;

  @draftsListModule.Getter("selectedDraft")
  private selectedDraft!: ShoppingCart;

  @draftsListModule.Action(FETCH_DRAFTS)
  private fetchDrafts!: () => IShoppingCartSearchResult;

  @draftsListModule.Action(SET_DRAFTS_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: ICartSearchCriteria) => void;

  @draftsListModule.Action(ADD_DRAFT)
  private addDraft!: (draft: AddDraft) => void;

  @draftsListModule.Action(DELETE_DRAFT)
  private deleteDraft!: (draftId: string[]) => void;

  @draftsListModule.Action(SET_SELECTED_DRAFT)
  private selectDraft!: (draft: IShoppingCart) => void;

  @draftsListModule.Action(DELETE_ITEM_FROM_DRAFT)
  private deleteDraftLineItem!: (draftLineItem: DeleteDraftLineItem) => void;

  @draftsListModule.Action(CLEAR_DRAFT)
  private clearDraft!: (draft: IShoppingCart) => void;

  @draftsListModule.Action(CHANGE_DRAFT_ITEM_QUANTITY)
  private changeDraftItemQuantity!: (payload: ChangeListItem) => void;

  pageSizes = pageSizes;

  showDraftDetailsSidebar = false;

  //queryBuilder = new QueryBuilder(CartSearchCriteria, CartSearchQuery);

  mounted() {
    this.fetchDrafts();
  }

  // routeChanged(route: Route) {
  //   const searchCriteria = this.queryBuilder.parseQuery(route.query);
  // this.setSearchCriteria({
  //   ...this.searchCriteria,
  //   ...searchCriteria
  // });
  // }

  pageChanged(page: number) {
    this.setSearchCriteria({
      ...this.searchCriteria,
      pageNumber: page,
    });
  }

  pageSizeChanged(pageSize: number) {
    this.setSearchCriteria({
      ...this.searchCriteria,
      pageNumber: 1,
      pageSize: pageSize,
    });
  }

  checkActivePageSize(pageSize: number) {
    return pageSize == this.searchCriteria.pageSize ? true : false;
  }

  draftAdded(newDraft: AddDraft) {
    this.addDraft(newDraft);
  }

  confirmDeleteDraft(draft: ShoppingCart) {
    this.$bvModal.msgBoxConfirm(i18n.t('account.drafts.confirm-delete-modal.message', [ draft.name ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.drafts.confirm-delete-modal.title') as string,
      okTitle: i18n.t('account.drafts.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('account.drafts.confirm-delete-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    })
      .then(value => {
        if(value) {
          this.deleteDraft([draft.id!])
        }
      });
  }

  confirmDeleteItem(item: CartLineItem) {
    this.$bvModal.msgBoxConfirm(i18n.t('shopping-cart.confirm-delete-modal.message', [ item.sku ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.drafts.confirm-delete-modal.title') as string,
      okTitle: i18n.t('account.drafts.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('account.drafts.confirm-delete-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    })
      .then(value => {
        if(value) {
          const payload = new DeleteDraftLineItem(item.id!, this.selectedDraft.name!, this.selectedDraft.type!);
          this.deleteDraftLineItem(payload);
        }
      });
  }

  confirmClearDraft(){
    this.$bvModal.msgBoxConfirm(i18n.t('account.drafts.confirm-clear-modal.message') as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.drafts.confirm-clear-modal.title') as string,
      okTitle: i18n.t('account.drafts.confirm-clear-modal.ok') as string,
      cancelTitle: i18n.t('account.drafts.confirm-clear-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    })
      .then(value => {
        if(value) {
          this.clearDraft(this.selectedDraft);
        }
      });
  }

  changeQuantity(item: CartLineItem, quantity: number) {
    const changeItemQty = new ChangeCartItemQty();
    changeItemQty.lineItemId = item.id;
    changeItemQty.quantity = quantity;
    const payload = new ChangeListItem(this.selectedDraft.name!, this.selectedDraft.type, changeItemQty);
    this.changeDraftItemQuantity(payload);
  }

  showDraftDetails(draft: ShoppingCart){
    this.selectDraft(draft);
    this.showDraftDetailsSidebar = true;
  }

  filtersChanges(searchCriteria: ICartSearchCriteria) {
    this.setSearchCriteria(searchCriteria);
  }

  // searchCriteriaChanged(searchCriteria: ICartSearchCriteria) {
  //   const query = this.queryBuilder.buildQuery(new CartSearchCriteria(searchCriteria));
  //   this.$router.push({
  //     ...this.$route,
  //     query
  //   });
  // }

  addLineItemsToList1(){
    const item1 = new AddCartItem();
    item1.init({productId: "4ed55441810a47da88a483e5a1ee4e94", quantity: 1 });
    listClient.addItemToList(item1, storeName, locale);
  }

  addLineItemsToList2(){
    const item2 = new AddCartItem();
    item2.init({productId: "ac8da6c50cef42ad97d6f1effe2abaee", quantity: 1 });
    listClient.addItemToList(item2, storeName, locale);
  }

}
