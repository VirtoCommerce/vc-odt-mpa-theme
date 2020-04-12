export class DeleteDraftLineItem {
  lineItemId: string;
  listName: string;
  type: string;
  constructor(lineItemId: string, listName: string, type: string) {
    this.lineItemId = lineItemId;
    this.listName = listName;
    this.type = type;
  }
}
