import Vue from "vue";
import { appendToFilename } from "@core/utilities/utilities";


export function appendSuffixToImgUrl(value: string, suffix: string) {
  if (!value) return '';
  if (!suffix) return value;
  const result = appendToFilename(value, `_${suffix}`);
  return result;
}

