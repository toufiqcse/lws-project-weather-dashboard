import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  // create ref for setTimeOut to clearTimeOut
  const timeOutIdRef = useRef(null);

  //   cleanUp
  useEffect(() => {
    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, []);

  //..args is variable argument
  const debounceCallBack = (...args) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }
    timeOutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debounceCallBack;
};

export default useDebounce;
