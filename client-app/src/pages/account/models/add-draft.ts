export class AddDraft {
  listName: string;
  type: string;
  constructor(listName = "", type = "orderDraft") {
    this.listName = listName;
    this.type = type;
  }
}
