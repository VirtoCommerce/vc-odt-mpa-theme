import Vue from "vue";
import Component from "vue-class-component";
import { Validation } from "vuelidate"; //Don't remove this import
import { required } from "vuelidate/lib/validators";

@Component({
  validations: {
    listName: { required }
  }
})
export default class AddDraftModal extends Vue {
  listName = "";

  resetForm() {
    this.listName = "";
    this.$nextTick(() => {
      this.$v.$reset();
    });
  }

  submitForm() {
    this.$emit("draftAdded", this.listName);
    this.$bvModal.hide("addDraftModal");
  }
}
