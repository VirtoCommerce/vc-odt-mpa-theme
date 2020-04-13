import { ChangeCartItemQty } from 'core/api/api-clients';
import { orderDraftType } from 'core/constants';

export class ChangeListItem {
  listName: string;
  type: string;
  changeQty: ChangeCartItemQty | null | undefined;

  constructor(listName: string, type = orderDraftType, changeQty: ChangeCartItemQty | null | undefined) {
    this.listName = listName;
    this.type = type;
    this.changeQty = changeQty;
  }
}
