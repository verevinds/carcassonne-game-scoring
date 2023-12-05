import React from 'react';

export function useDebounceCallback(
  callback: (arg?: unknown) => void,
  delay: number,
) {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const start = React.useCallback(
    (arg?: unknown) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callbackRef.current(arg), delay);
    },
    [delay],
  );
  const stop = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);
  return {
    start,
    stop,
  };
}
