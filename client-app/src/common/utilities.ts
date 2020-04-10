import { Dictionary } from '@common/models/dictionary';

export function safeInvoke<T, R>(arg: T | undefined, callback: (arg: T) => R): R | undefined {
  return arg !== undefined ? callback(arg) : undefined;
}

export function toDictionary(obj: any): Dictionary<string | (string | null)[] | null | undefined> {
  const result: Dictionary<string> = {};
  for (const key of Object.keys(obj)) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}
