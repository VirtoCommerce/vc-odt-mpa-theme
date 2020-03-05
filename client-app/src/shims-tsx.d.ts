import Vue, { VNode } from "vue";
import { LocaleMessages } from "vue-i18n";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface Window {
    BASE_URL: string;
    STORE_NAME: string;
    LOCALE: string;
    LOCALIZATION_MESSAGES: LocaleMessages;
    THEME_SETTINGS: any;
  }
}
