import HttpService from "@common/services/http.service";

export default class LocalizationService {
  static async get() {
    return await HttpService.get("themes", "localization.json");
  }
}
