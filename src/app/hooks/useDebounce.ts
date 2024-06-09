import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 800) => {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};
