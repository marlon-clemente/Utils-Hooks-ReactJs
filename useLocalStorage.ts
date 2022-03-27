import { useCallback, useState } from "react";

interface TypeUseLocalStorage {
  key: string;
  initialValue: string;
}

const useLocalStorage = ({ key, initialValue = "" }: TypeUseLocalStorage) => {
  const [custonState, setCustonState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setCustonValue = useCallback(
    (value) => {
      try {
        setCustonState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [custonState, setCustonValue];
};
