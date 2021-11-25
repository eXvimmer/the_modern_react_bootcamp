import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function useLocalStorageState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const initialValue = localStorage.getItem(key);

      if (initialValue) {
        return JSON.parse(initialValue) as T;
      }

      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    console.log("saved");
  }, [state, key]);

  return [state, setState];
}
