import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartSearchResult, AddCartItem, ShoppingCart } from "core/api/api-clients";
import AddDraftModal from "libs/order-draft/components/add-draft-modal/index.vue";
import { AddDraft } from "libs/order-draft/models/add-draft";
import { ADD_DRAFT, ADD_ITEM_TO_DRAFT } from "libs/order-draft/store/drafts-list/definitions";

const draftModule = namespace("draftsListModule");

@Component({
  name: "AddToDraftButton",
  components: {
    AddDraftModal
  }
})
export default class AddToDraftButton extends Vue {

  plusIcon = faPlusCircle;

  @draftModule.Getter("isLoading")
  isLoading!: boolean;

  @Prop()
  productId!: string;

  @draftModule.Getter("drafts")
  drafts!: ShoppingCartSearchResult[];

  @draftModule.Action(ADD_DRAFT)
  addNewDraft!: (draft: AddDraft) => void;

  @draftModule.Action(ADD_ITEM_TO_DRAFT)
  addItemToDraft!: (criteria: AddCartItem) => void;


  async addToNewDraft(newDraft: AddDraft) {
    (this.$refs.dropdown as any).hide();
    await this.addNewDraft(newDraft);
    const addItemToDraft = new AddCartItem();
    addItemToDraft.type = newDraft.type;
    addItemToDraft.productId = this.productId;
    addItemToDraft.listName = newDraft.listName;
    addItemToDraft.quantity = 1;
    await this.addItemToDraft(addItemToDraft);
  }

  async addToDraft(draft: ShoppingCart) {
    const addItemToDraft = new AddCartItem();
    addItemToDraft.type = draft.type;
    addItemToDraft.productId = this.productId;
    addItemToDraft.listName = draft.name;
    addItemToDraft.quantity = 1;
    await this.addItemToDraft(addItemToDraft);
  }

}
