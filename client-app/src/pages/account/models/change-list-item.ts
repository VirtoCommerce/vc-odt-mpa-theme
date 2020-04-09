import { ChangeCartItemQty } from '@common/api/api-clients';

export class ChangeListItem {
  listName: string;
  type: string;
  changeQty: ChangeCartItemQty | null | undefined;

  constructor(listName: string, type = "orderDraft", changeQty: ChangeCartItemQty | null | undefined) {
    this.listName = listName;
    this.type = type;
    this.changeQty = changeQty;
  }
}
