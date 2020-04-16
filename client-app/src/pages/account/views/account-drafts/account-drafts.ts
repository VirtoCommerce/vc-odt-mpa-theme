import Vue from "vue";
import Component from "vue-class-component";
import { Route, RawLocation } from 'vue-router';
import { namespace } from "vuex-class";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import i18n from "@i18n";
import { BvTableFieldArray } from "bootstrap-vue";
import AddDraftModal from "libs/order-draft/components/add-draft-modal/index.vue";
import DraftsFilter from "libs/order-draft/components/drafts-filter/index.vue";
import { SET_DRAFTS_SEARCH_CRITERIA, ADD_DRAFT, DELETE_DRAFT, SET_SELECTED_DRAFT } from "libs/order-draft/store/drafts-list/definitions";
import DraftDetailsSidebar from '@account/views/account-drafts/draft-details-sidebar/index.vue';
import { ICartSearchCriteria, IShoppingCartSearchResult, CartSearchCriteria, ShoppingCart, IShoppingCart } from "@core/api/api-clients";
import { pageSizes } from "@core/constants";
import { CartSearchQuery } from '@core/models/search/extensions/cart-search-query';
import { QueryBuilder } from "@core/services/query-builder.service";

const draftsListModule = namespace("draftsListModule");

@Component({
  components: {
    AddDraftModal,
    DraftsFilter,
    DraftDetailsSidebar
  },
  beforeRouteUpdate: function (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: AccountDrafts) => any) | void) => void) {
    (this as AccountDrafts).buildSearchCriteria(to);
    next();
  }
})
export default class AccountDrafts extends Vue {
  @draftsListModule.Getter("isLoading")
  private isLoading!: boolean;

  @draftsListModule.Getter("columns")
  private columns!: BvTableFieldArray;

  @draftsListModule.Getter("searchCriteria")
  private searchCriteria!: ICartSearchCriteria;

  @draftsListModule.Action(SET_DRAFTS_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: ICartSearchCriteria) => void;

  @draftsListModule.Getter("drafts")
  private drafts!: IShoppingCartSearchResult;

  @draftsListModule.Action(SET_SELECTED_DRAFT)
  private selectDraft!: (draft: IShoppingCart) => void;

  @draftsListModule.Action(ADD_DRAFT)
  private addDraft!: (draftName: string) => void;

  @draftsListModule.Action(DELETE_DRAFT)
  private deleteDraft!: (draftId: string[]) => void;

  pageSizes = pageSizes;

  showDraftDetailsSidebar = false;

  deleteIcon = faTrashAlt;

  queryBuilder = new QueryBuilder(CartSearchCriteria, CartSearchQuery);

  mounted() {
    this.buildSearchCriteria(this.$route, this.searchCriteria);
  }

  buildSearchCriteria(route: Route, initialSearchCriteria?: ICartSearchCriteria) {
    const searchCriteria = this.queryBuilder.parseQuery(route.query);
    this.setSearchCriteria({
      ...initialSearchCriteria,
      ...searchCriteria
    });
  }

  pageChanged(pageNumber: number) {
    this.searchCriteriaChanged({
      ...this.searchCriteria,
      pageNumber
    });
  }

  pageSizeChanged(pageSize: number) {
    this.searchCriteriaChanged({
      ...this.searchCriteria,
      pageNumber: 1,
      pageSize
    });
  }

  checkActivePageSize(pageSize: number) {
    return pageSize == this.searchCriteria.pageSize ? true : false;
  }

  searchCriteriaChanged(searchCriteria: ICartSearchCriteria) {
    const query = this.queryBuilder.buildQuery(new CartSearchCriteria(searchCriteria));
    this.$router.push({
      ...this.$route,
      query
    });
  }

  showDraftDetails(draft: ShoppingCart){
    this.selectDraft(draft);
    this.showDraftDetailsSidebar = true;
  }

  sidebarClosed() {
    this.showDraftDetailsSidebar = false;
  }

  draftAdded(draftName: string) {
    this.addDraft(draftName);
  }

  async confirmDeleteDraft(draft: ShoppingCart) {
    const value = await this.$bvModal.msgBoxConfirm(i18n.t('account.drafts.confirm-delete-modal.message', [ draft.name ]) as string, {
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
      this.showDraftDetailsSidebar = false;
      this.deleteDraft([draft.id!]);
    }
  }

}
