import HttpService from "@common/http.service";

export default class LocalizationService {
  static async get() {
    return await HttpService.get("themes", "localization.json");
  }
}
