import { orderDraftType } from 'core/constants';

export class AddDraft {
  constructor(
    public listName = "",
    public type = orderDraftType) {
  }
}
