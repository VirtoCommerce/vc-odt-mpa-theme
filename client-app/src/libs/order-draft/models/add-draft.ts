import { orderDraftType } from 'core/constants';

export class AddDraft {
  listName: string;
  type: string;
  constructor(listName = "", type = orderDraftType) {
    this.listName = listName;
    this.type = type;
  }
}
