import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine); //declare state for online active status

  // create function for handle isOnline active
  function handleOnline() {
    setIsOnline(true);
  }
  // create function for handle isOffline active
  function handleOffline() {
    setIsOnline(false);
  }
  // declare useEffect hooks for auto sync to the UI
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // cleanup function
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return state for use to other components
  return isOnline;
}
