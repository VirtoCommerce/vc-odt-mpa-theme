import Vue from "vue";
import Component from "vue-class-component";
import { Validation } from "vuelidate"; //Don't remove this import
import { required } from "vuelidate/lib/validators";
import { AddDraft } from "@account/models/add-draft";

@Component({
  validations: {
    draft: {
      listName: { required }
    }
  }
})
export default class AddDraftModal extends Vue {
  draft: AddDraft = new AddDraft();

  resetForm() {
    this.draft = new AddDraft();
    this.$nextTick(() => {
      this.$v.$reset();
    });
  }

  submitForm() {
    const draft = new AddDraft();
    draft.listName = this.draft.listName;
    this.$bvModal.hide("addDraftModal");
    this.$emit("draftAdded", draft);
  }
}
