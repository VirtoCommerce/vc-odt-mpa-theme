import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ICartSearchCriteria } from 'core/api/api-clients';

@Component
export default class DraftsFilter extends Vue {
  @Prop()
  searchCriteria!: ICartSearchCriteria;

  searchIcon = faSearch;

  emitChanges(searchCriteria: ICartSearchCriteria) {
    this.$emit("searchCriteriaChanged", searchCriteria);
  }

  changeKeyword(keyword: string) {
    const searchCriteria = { ...this.searchCriteria, keyword };
    this.emitChanges(searchCriteria);
  }

}
