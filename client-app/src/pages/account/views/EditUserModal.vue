<template>
  <b-modal id="editUserModal"
           no-close-on-backdrop
           @hide="resetForm">
    <div slot="modal-title">
      {{ $t("account.users.edit-user-title") }}
    </div>
    <b-form v-if="userInfo">
      <b-form-group :label="$t('account.users.add-user.email-label')" label-for="email">
        <b-form-input
          id="email"
          v-model="$v.userInfo.email.$model"
          type="email"
          :class="{ 'is-invalid': $v.userInfo.email.$error }"
          :placeholder="$t('account.users.add-user.email-placeholder')"></b-form-input>
        <b-form-invalid-feedback
          v-if="!$v.userInfo.email.email">
          {{ $t("account.users.add-user.email-not-valid") }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group :label=" $t('account.users.add-user.first-name-label')" label-for="firstName">
        <b-form-input
          id="firstName"
          v-model="userInfo.firstName"
          type="text"
          :placeholder="$t('account.users.add-user.first-name-placeholder')"></b-form-input>
      </b-form-group>

      <b-form-group :label=" $t('account.users.add-user.last-name-label')" label-for="lastName">
        <b-form-input
          id="lastName"
          v-model="userInfo.lastName"
          type="text"
          :placeholder="$t('account.users.add-user.last-name-placeholder')"></b-form-input>
      </b-form-group>

      <b-form-group :label="$t('account.users.add-user.role-label')" label-for="role">
        <b-form-select id="role"
                       v-model="userInfo.role.name"
                       plain>
          <b-form-select-option
            value="Store administrator">
            {{ $t("account.users.add-user.account-admin") }}
          </b-form-select-option>
          <b-form-select-option
            value="Store manager">
            {{ $t("account.users.add-user.business-user") }}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>
    </b-form>
    <template v-slot:modal-footer>
      <b-button
        variant="primary"
        :disabled="$v.userInfo.$invalid"
        @click="submitForm">
        {{ $t("account.users.add-user.submit") }}
      </b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { Validation } from "vuelidate"; //Don't remove this import
import { email } from "vuelidate/lib/validators";
import { User, UserUpdateInfo } from "@common/api/api-clients";

@Component({
  validations: {
    userInfo: {
      email: { email }
    }
  }
})
export default class EditUserModal extends Vue {
  @Prop()
  user!: User;

  @Watch("user")
  onPropertyChanged(newUser: User) {
    const newUserCopy = new User();
    newUserCopy.init({ ...newUser });
    this.userInfo = newUserCopy;
  }

  userInfo: User | null = null;

  resetForm() {
    this.$nextTick(() => {
      this.$v.$reset();
    });
  }

  submitForm() {
    if (this.userInfo) {
      const user: UserUpdateInfo = new UserUpdateInfo();
      user.init({
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName,
        fullName: `${this.userInfo.firstName} ${this.userInfo.lastName}`,
        email: this.userInfo.email,
        roles: [this.userInfo.role!.name!],
        id: this.userInfo.id
      });
      this.$bvModal.hide("editUserModal");
      this.$emit("userChanged", user);
    }
  }
}
</script>
