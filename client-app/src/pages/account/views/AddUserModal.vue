<template>
  <b-modal id="addUserModal">
    <div slot="modal-title">
      {{ $t("account.users.add-user.title") }}
    </div>
    <b-form>
      <b-form-group :label="$t('account.users.add-user.email-label')" label-for="email">
        <b-form-input
          id="email"
          v-model="$v.user.email.$model"
          type="email"
          :class="{ 'is-invalid': $v.user.email.$error }"
          :placeholder="$t('account.users.add-user.email-placeholder')"
          @blur="$v.user.email.$touch()"></b-form-input>
        <div
          v-if="!$v.user.email.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.email-required") }}
        </div>
        <div
          v-if="!$v.user.email.email"
          class="invalid-feedback">
          {{ $t("account.users.add-user.email-not-valid") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.first-name-label')" label-for="firstName">
        <b-form-input
          id="firstName"
          v-model="$v.user.firstName.$model"
          type="text"
          :class="{ 'is-invalid': $v.user.firstName.$error }"
          :placeholder="$t('account.users.add-user.first-name-placeholder')"
          @blur="$v.user.firstName.$touch()"></b-form-input>
        <div
          v-if="!$v.user.firstName.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.first-name-required") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.last-name-label')" label-for="lastName">
        <b-form-input
          id="lastName"
          v-model="$v.user.lastName.$model"
          type="text"
          :class="{ 'is-invalid': $v.user.lastName.$error }"
          :placeholder="$t('account.users.add-user.last-name-placeholder')"
          @blur="$v.user.lastName.$touch()"></b-form-input>
        <div
          v-if="!$v.user.lastName.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.last-name-required") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.role-label')" label-for="role">
        <b-form-select
          id="role"
          v-model="$v.user.role.$model"
          :class="{ 'is-invalid': $v.user.role.$error }"
          @blur.native="$v.user.role.$touch()">
          <template v-slot:first>
            <b-form-select-option
              value
              disabled>
              {{ $t("account.users.add-user.role-default-placeholder") }}
            </b-form-select-option>
          </template>
          <b-form-select-option value="store-admin">
            {{ $t("account.users.add-user.account-admin") }}
          </b-form-select-option>
          <b-form-select-option
            value="store-manager">
            {{ $t("account.users.add-user.business-user") }}
          </b-form-select-option>
        </b-form-select>
        <div
          v-if="!$v.user.role.required"
          class="invalid-feedback">
          {{ $t("account.users.add-user.role-required") }}
        </div>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.password-label')" label-for="password">
        <b-input-group>
          <b-form-input
            id="password"
            v-model="$v.user.password.$model"
            :type="passwordFieldType"
            :class="{ 'is-invalid': $v.user.password.$error }"
            :placeholder="$t('account.users.add-user.password-placeholder')"
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
      </b-form-group>

      <b-form-group
        :label="$t('account.users.add-user.confirm-password-label')"
        label-for="confirmPassword">
        <b-input-group>
          <b-form-input
            id="confirmPassword"
            v-model="$v.user.confirmPassword.$model"
            :type="passwordFieldType"
            :class="{ 'is-invalid': $v.user.confirmPassword.$error }"
            :placeholder="$t('account.users.add-user.confirm-password-placeholder')"
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
      </b-form-group>
    </b-form>
    <template v-slot:modal-footer>
      <b-button variant="danger" @click="resetForm">
        {{ $t("account.users.add-user.reset") }}
      </b-button>
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

@Component({
  validations: {
    user: {
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

  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  };

  resetForm() {
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
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
    this.$bvModal.hide("addUserModal");
    //todo: emit user object to parent component
    console.log(this.user);
    this.resetForm();
  }
}
</script>
