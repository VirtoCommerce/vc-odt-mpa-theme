import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import { namespace } from "vuex-class";
import i18n from "@i18n";
import { ChangeListItem } from 'libs/order-draft/models/change-list-item';
import { DeleteDraftLineItem } from 'libs/order-draft/models/delete-draft-line-item';
import { DELETE_ITEM_FROM_DRAFT, CLEAR_SELECTED_DRAFT, CHANGE_DRAFT_ITEM_QUANTITY } from "libs/order-draft/store/drafts-list/definitions";
import CartHeader from "libs/shopping-cart/components/cart-header/index.vue";
import CartItemsList from "libs/shopping-cart/components/cart-items-list/index.vue";
import { ShoppingCart, IShoppingCart, CartLineItem, ChangeCartItemQty } from "@core/api/api-clients";

const draftsListModule = namespace("draftsListModule");

@Component({
  components: {
    CartHeader,
    CartItemsList
  }
})
export default class DraftDetailsSidebar extends Vue {
  @Prop()
  showSidebar!: boolean;

  @draftsListModule.Getter("isLoading")
  private isLoading!: boolean;

  @draftsListModule.Getter("selectedDraft")
  private selectedDraft!: ShoppingCart;

  @draftsListModule.Action(CLEAR_SELECTED_DRAFT)
  private clearDraft!: (draft: IShoppingCart) => void;

  @draftsListModule.Action(CHANGE_DRAFT_ITEM_QUANTITY)
  private changeDraftItemQuantity!: (payload: ChangeListItem) => void;

  @draftsListModule.Action(DELETE_ITEM_FROM_DRAFT)
  private deleteDraftLineItem!: (draftLineItem: DeleteDraftLineItem) => void;

  async confirmDeleteItem(item: CartLineItem) {
    const value = await this.$bvModal.msgBoxConfirm(i18n.t('shopping-cart.confirm-delete-modal.message', [ item.sku ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.drafts.confirm-delete-modal.title') as string,
      okTitle: i18n.t('account.drafts.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('account.drafts.confirm-delete-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    });
    if(value) {
      const payload = new DeleteDraftLineItem(item.id!, this.selectedDraft.name!);
      this.deleteDraftLineItem(payload);
    }
  }

  async confirmClearDraft(){
    const value = await this.$bvModal.msgBoxConfirm(i18n.t('account.drafts.confirm-clear-modal.message') as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('account.drafts.confirm-clear-modal.title') as string,
      okTitle: i18n.t('account.drafts.confirm-clear-modal.ok') as string,
      cancelTitle: i18n.t('account.drafts.confirm-clear-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    });
    if(value) {
      this.clearDraft(this.selectedDraft);
    }
  }

  changeQuantity(lineItem: CartLineItem, quantity: number) {
    const changeItemQty = new ChangeCartItemQty({
      lineItemId: lineItem.id,
      quantity
    });
    const payload = new ChangeListItem(this.selectedDraft.name!, changeItemQty);
    this.changeDraftItemQuantity(payload);
  }

  detailsSidebarHidden() {
    this.$emit("sidebar-closed", false);
  }

}
