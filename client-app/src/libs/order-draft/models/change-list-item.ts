import { ChangeCartItemQty } from 'core/api/api-clients';
import { orderDraftType } from 'core/constants';

export class ChangeListItem {
  constructor(
    public listName: string,
    public type = orderDraftType,
    public changeQty: ChangeCartItemQty | null | undefined) {
  }
}
