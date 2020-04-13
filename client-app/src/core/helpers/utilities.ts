import { Dictionary } from 'core/models/dictionary';

export function safeInvoke<T, R>(arg: T | null | undefined, callback: (arg: T) => R): R | undefined {
  return arg != null ? callback(arg) : undefined;
}

export function toDictionary(obj: any): Dictionary<string | (string | null)[] | null | undefined> {
  const result: Dictionary<string> = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key]?.toString();
    if (value) {
      result[key] = value;
    }
  }
  return result;
}
