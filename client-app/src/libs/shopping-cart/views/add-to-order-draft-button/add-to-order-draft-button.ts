import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { AddDraft } from "libs/order-draft/models/add-draft";
import { ADD_DRAFT, ADD_ITEM_TO_DRAFT } from "libs/order-draft/store/drafts-list/definitions";
import { ShoppingCartSearchResult, AddCartItem, ShoppingCart } from "@common/api/api-clients";

const draftModule = namespace("draftsListModule");

@Component({
  name: "AddToDraftButton"
})
export default class AddToDraftButton extends Vue {

  plusIcon = faPlusCircle;

  newDraftName = "";

  @Prop()
  productId!: string;

  @draftModule.Getter("drafts")
  drafts!: ShoppingCartSearchResult[];

  @draftModule.Action(ADD_DRAFT)
  addNewDraft!: (draft: AddDraft) => void;

  @draftModule.Action(ADD_ITEM_TO_DRAFT)
  addItemToDraft!: (criteria: AddCartItem) => void;


  async addToNewDraft() {
    (this.$refs.dropdown as any).hide();
    const addNewDraft = new AddDraft();
    addNewDraft.listName = this.newDraftName;
    await this.addNewDraft(addNewDraft);
    const addItemToDraft = new AddCartItem();
    addItemToDraft.type = addNewDraft.type;
    addItemToDraft.productId = this.productId;
    addItemToDraft.listName = addNewDraft.listName;
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
