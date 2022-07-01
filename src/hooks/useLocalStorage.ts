import { useEffect, useState } from "react";

export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage;
  }
};

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = nextLocalStorage()?.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    nextLocalStorage()?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
