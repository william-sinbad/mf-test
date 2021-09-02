import { useSelector } from "react-redux";
import { selectIsSidebarOpen } from "../application";

const useHomeState = () => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  return { isSidebarOpen };
};

export default useHomeState;
