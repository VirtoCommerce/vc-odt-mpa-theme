<template>
  <b-modal id="addUserModal"
           no-close-on-backdrop
           @close="resetForm">
    <div slot="modal-title">
      {{ $t("account.users.add-user.title") }}
    </div>
    <b-form>
      <b-form-group :label="$t('account.users.add-user.email-label')"
                    label-for="email"
                    label-cols-sm="3">
        <b-form-input
          id="email"
          v-model="$v.user.email.$model"
          type="email"
          :class="{ 'is-invalid': $v.user.email.$error }"
          :placeholder="$t('account.users.add-user.email-placeholder')"
          aria-describedby="email-help-block"
          @blur="$v.user.email.$touch()"></b-form-input>
        <b-form-text v-if="!$v.user.email.$dirty" id="email-help-block">
          {{ $t("account.users.add-user.required-field") }}
        </b-form-text>
        <div
          v-if="!$v.user.email.email"
          class="invalid-feedback">
          {{ $t("account.users.add-user.email-not-valid") }}
        </div>
        <div
          v-if="!$v.user.email.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.email-required") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.first-name-label')"
                    label-for="firstName"
                    label-cols-sm="3">
        <b-form-input
          id="firstName"
          v-model="user.firstName"
          type="text"
          :placeholder="$t('account.users.add-user.first-name-placeholder')"></b-form-input>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.last-name-label')"
                    label-for="lastName"
                    label-cols-sm="3">
        <b-form-input
          id="lastName"
          v-model="user.lastName"
          type="text"
          :placeholder="$t('account.users.add-user.last-name-placeholder')"></b-form-input>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.username-label')"
                    label-for="userName"
                    label-cols-sm="3">
        <b-form-input
          id="userName"
          v-model="$v.user.userName.$model"
          :class="{ 'is-invalid': $v.user.userName.$error }"
          type="text"
          :placeholder="$t('account.users.add-user.username-placeholder')"
          aria-describedby="userName-help-block"
          @blur="$v.user.userName.$touch()"></b-form-input>
        <b-form-text v-if="!$v.user.userName.$dirty" id="userName-help-block">
          {{ $t("account.users.add-user.required-field") }}
        </b-form-text>
        <div
          v-if="!$v.user.userName.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.username-required") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.role-label')"
                    label-for="role"
                    label-cols-sm="3">
        <b-form-select
          id="role"
          v-model="$v.user.role.$model"
          :class="{ 'is-invalid': $v.user.role.$error }"
          aria-describedby="role-help-block"
          @blur.native="$v.user.role.$touch()">
          <template v-slot:first>
            <b-form-select-option
              value
              disabled>
              {{ $t("account.users.add-user.role-default-placeholder") }}
            </b-form-select-option>
          </template>
          <b-form-select-option value="Store administrator">
            {{ $t("account.users.add-user.account-admin") }}
          </b-form-select-option>
          <b-form-select-option
            value="Store manager">
            {{ $t("account.users.add-user.business-user") }}
          </b-form-select-option>
        </b-form-select>
        <b-form-text v-if="!$v.user.role.$dirty" id="role-help-block">
          {{ $t("account.users.add-user.required-field") }}
        </b-form-text>
        <div
          v-if="!$v.user.role.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.role-required") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.password-label')"
                    label-for="password"
                    label-cols-sm="3">
        <b-input-group>
          <b-form-input
            id="password"
            v-model="$v.user.password.$model"
            :type="passwordFieldType"
            :class="{ 'is-invalid': $v.user.password.$error }"
            :placeholder="$t('account.users.add-user.password-placeholder')"
            aria-describedby="password-help-block"
            @blur="$v.user.password.$touch()"></b-form-input>
          <b-input-group-append is-text>
            <font-awesome-layers @click="switchPasswordVisibility">
              <font-awesome-icon v-if="passwordFieldType === 'password'" :icon="eyeIcon"></font-awesome-icon>
              <font-awesome-icon v-if="passwordFieldType === 'text'" :icon="eyeSlashIcon"></font-awesome-icon>
            </font-awesome-layers>
          </b-input-group-append>
          <div
            v-if="!$v.user.password.required"
            class="invalid-feedback">
            {{ $t("account.users.add-user.password-required") }}
          </div>
          <div
            v-if="!$v.user.password.minLength"
            class="invalid-feedback">
            {{ $t('account.users.add-user.password-length-error', [$v.user.password.$params.minLength.min]) }}
          </div>
          <div
            v-if="!$v.user.password.containsUppercase && $v.user.password.$model.length >= 1"
            class="invalid-feedback">
            {{ $t("account.users.add-user.password-uppercase-error") }}
          </div>
          <div
            v-if="!$v.user.password.containsLowercase && $v.user.password.$model.length >= 1"
            class="invalid-feedback">
            {{ $t("account.users.add-user.password-lowercase-error") }}
          </div>
        </b-input-group>
        <b-form-text v-if="!$v.user.password.$dirty" id="password-help-block">
          {{ $t("account.users.add-user.required-field") }}
        </b-form-text>
      </b-form-group>

      <b-form-group
        :label="$t('account.users.add-user.confirm-password-label')"
        label-for="confirmPassword"
        label-cols-sm="4">
        <b-input-group>
          <b-form-input
            id="confirmPassword"
            v-model="$v.user.confirmPassword.$model"
            :type="passwordFieldType"
            :class="{ 'is-invalid': $v.user.confirmPassword.$error }"
            :placeholder="$t('account.users.add-user.confirm-password-placeholder')"
            aria-describedby="confirmPassword-help-block"
            @blur="$v.user.confirmPassword.$touch()"></b-form-input>
          <b-input-group-append is-text>
            <font-awesome-layers @click="switchPasswordVisibility">
              <font-awesome-icon v-if="passwordFieldType === 'password'" :icon="eyeIcon"></font-awesome-icon>
              <font-awesome-icon v-if="passwordFieldType === 'text'" :icon="eyeSlashIcon"></font-awesome-icon>
            </font-awesome-layers>
          </b-input-group-append>
          <div
            v-if="!$v.user.password.$dirty && !$v.user.confirmPassword.required"
            class="invalid-feedback">
            {{ $t("account.users.add-user.confirm-password-password-required") }}
          </div>
          <div
            v-if="$v.user.password.$dirty && !$v.user.confirmPassword.required"
            class="invalid-feedback">
            {{ $t("account.users.add-user.confirm-password-required") }}
          </div>
          <div
            v-if="$v.user.password.$dirty && !$v.user.confirmPassword.sameAsPassword"
            class="invalid-feedback">
            {{ $t("account.users.add-user.confirm-password-not-same") }}
          </div>
        </b-input-group>
        <b-form-text v-if="!$v.user.confirmPassword.$dirty" id="confirmPassword-help-block">
          {{ $t("account.users.add-user.required-field") }}
        </b-form-text>
      </b-form-group>
    </b-form>
    <template v-slot:modal-footer>
      <b-button
        variant="primary"
        :disabled="$v.user.$invalid"
        @click="submitForm">
        {{ $t("account.users.add-user.submit") }}
      </b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Validation } from "vuelidate"; //Don't remove this import
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { AddUserForm } from "@account/store/modules/users-list/types";

@Component({
  validations: {
    user: {
      userName: { required },
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

  user = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  };

  resetForm() {
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.userName = "";
    this.user.role = "";
    this.user.password = "";
    this.user.confirmPassword = "";
    this.$nextTick(() => {
      this.$v.$reset();
    });
  }

  switchPasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === "password" ? "text" : "password";
  }

  submitForm() {
    const user: AddUserForm = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      userName: this.user.userName,
      password: this.user.password,
      role: this.user.role
    }
    this.$bvModal.hide("addUserModal");
    this.$emit("userAdded", user);
    this.resetForm();
  }
}
</script>
