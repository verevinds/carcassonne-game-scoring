import { useState, useEffect, useRef, useCallback } from 'react';

type Callback = (arg?: unknown) => void;
type Value = string | number | boolean;
type ReturnDebounceCallback = {
  start: (arg?: unknown) => void;
  stop: () => void;
};

const isCallback = (value: Value | Callback): value is Callback =>
  typeof value === 'function';

function useDebounce<T extends Value>(value: T, delay: number): T;
function useDebounce(callback: Callback, delay: number): ReturnDebounceCallback;
function useDebounce<T extends Value>(
  arg: T | Callback,
  delay: number,
): T | ReturnDebounceCallback {
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(
    isCallback(arg) ? undefined : arg,
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const argRef = useRef<T | Callback>(arg);

  useEffect(() => {
    argRef.current = arg;
  }, [arg]);
  useEffect(() => {
    if (!arg) {
      const handler = setTimeout(() => {
        setDebouncedValue(arg);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }
    if (!isCallback(arg)) {
      setDebouncedValue(arg);
    }
  }, [arg]);

  const start = useCallback(
    (argValue?: unknown) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        if (isCallback(argRef.current)) {
          argRef.current(argValue);
        }
      }, delay);
    },
    [delay],
  );
  const stop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  if (debouncedValue) {
    return debouncedValue;
  } else {
    return { start, stop };
  }
}

export default useDebounce;
