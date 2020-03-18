import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { UsersListFilters } from '@account/store/modules/users-list/types';

@Component
export default class UsersFilter extends Vue {
  @Prop()
  usersFilter!: UsersListFilters;

  emitChanges(updatedFilters: UsersListFilters) {
    this.$emit("filtersChanged", updatedFilters);
  }

  changeKeyword(value: string) {
    const updatedFilters = { ...this.usersFilter, keyword: value };
    this.emitChanges(updatedFilters);
  }

}
