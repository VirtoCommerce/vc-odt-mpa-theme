export function safeInvoke<T, R>(arg: T | undefined, callback: (arg: T) => R): R | undefined {
  return arg !== undefined ? callback(arg) : undefined;
}
