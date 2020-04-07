import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import i18n from "@i18n";
import { BvTableFieldArray } from "bootstrap-vue";
import AddDraftModal from "@account/components/add-draft-modal/index.vue";
import DraftsFilter from "@account/components/drafts-filter/index.vue";
import { AddDraft } from "@account/models/add-draft";
import { FETCH_DRAFTS, SET_DRAFTS_SEARCH_CRITERIA, ADD_DRAFT, DELETE_DRAFT } from "@account/store/modules/drafts-list/definitions";
import { ICartSearchCriteria, IShoppingCartSearchResult, CartSearchCriteria, ShoppingCart } from "@common/api/api-clients";
import { pageSizes } from "@common/constants";
import { QueryBuilder } from "@common/services/query-builder.service";

const draftsListModule = namespace("draftsListModule");

@Component({
  components: {
    AddDraftModal,
    DraftsFilter
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

  @draftsListModule.Action(FETCH_DRAFTS)
  private fetchDrafts!: () => IShoppingCartSearchResult;

  @draftsListModule.Action(SET_DRAFTS_SEARCH_CRITERIA)
  private setSearchCriteria!: (searchCriteria: ICartSearchCriteria) => void;

  @draftsListModule.Action(ADD_DRAFT)
  private addDraft!: (draft: AddDraft) => void;

  @draftsListModule.Action(DELETE_DRAFT)
  private deleteDraft!: (draftId: string[]) => void;

  pageSizes = pageSizes;

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

  showDraftDetails(draft: ShoppingCart){
    console.log(draft);
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
}
