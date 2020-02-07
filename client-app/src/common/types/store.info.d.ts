import Vue from "vue";
import { IStoreInfo } from "@common/plugins/store.info.plugin";

declare module 'vue/types/vue' {
  // Глобальные свойства можно объявлять
  // на интерфейсе `VueConstructor`
  interface VueConstructor {
    $storeInfo: IStoreInfo;
  }
}
