import { usePubSub } from "@sinbad/mf-utility";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { homeActions } from "../application";

const useHomeEvent = (): void => {
  const homeDispatcher = useDispatch();

  const setIsSidebarOpen = (payload: boolean) => {
    homeDispatcher(homeActions.toggleSidebarState(payload));
  };

  const [unSubs] = usePubSub<boolean>(
    "[SIDEBAR] toggleSidebar",
    setIsSidebarOpen
  );

  useEffect(() => {
    return () => {
      unSubs();
    };
  });
};

export default useHomeEvent;
