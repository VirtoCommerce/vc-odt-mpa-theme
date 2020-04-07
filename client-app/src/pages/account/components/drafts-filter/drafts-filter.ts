import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ICartSearchCriteria } from '@common/api/api-clients';

@Component
export default class DraftsFilter extends Vue {
  @Prop()
  searchCriteria!: ICartSearchCriteria;

  emitChanges(searchCriteria: ICartSearchCriteria) {
    this.$emit("searchCriteriaChanged", searchCriteria);
  }

  changeKeyword(value: string) {
    const searchCriteria = { ...this.searchCriteria, name: value };
    this.emitChanges(searchCriteria);
  }

}
