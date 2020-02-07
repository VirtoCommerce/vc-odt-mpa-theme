import HttpService from "@common/http.service";

export default class AccountService {
  static async getUserAccount() {
    return await HttpService.get("storefrontapi", "account");
  }
}
