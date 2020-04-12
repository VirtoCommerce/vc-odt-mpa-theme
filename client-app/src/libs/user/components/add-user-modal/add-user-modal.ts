import Vue from "vue";
import Component from "vue-class-component";
import { Validation } from "vuelidate"; //Don't remove this import
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AddUser } from "libs/user/models/add-user";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

@Component({
  validations: {
    user: {
      userName: { required },
      firstName: { required },
      lastName: { required },
      email: { required, email },
      role: { required },
      password: {
        required,
        minLength: minLength(8),
        containsUppercase(password) {
          return /\w*[A-Z]\w*/.test(password);
        },
        containsLowercase(password) {
          return /\w*[a-z]\w*/.test(password);
        }
      },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  }
})
export default class AddUserModal extends Vue {
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  passwordFieldType = "password";
  user: AddUser = new AddUser();

  resetForm() {
    this.user = new AddUser();
    this.$nextTick(() => {
      this.$v.$reset();
    });
  }

  switchPasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === "password" ? "text" : "password";
  }

  submitForm() {
    const user: AddUser = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      userName: this.user.userName,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword,
      role: this.user.role
    }
    this.$bvModal.hide("addUserModal");
    this.$emit("userAdded", user);
  }
}
