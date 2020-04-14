import Vue from "vue";
import Component from "vue-class-component";
import { Validation } from "vuelidate"; //Don't remove this import
import { required } from "vuelidate/lib/validators";

@Component({
  validations: {
    draftName: { required }
  }
})
export default class AddDraftModal extends Vue {
  draftName = "";

  resetForm() {
    this.draftName = "";
    this.$nextTick(() => {
      this.$v.$reset();
    });
  }

  submitForm() {
    this.$emit("draftAdded", this.draftName);
    this.$bvModal.hide("addDraftModal");
  }
}
