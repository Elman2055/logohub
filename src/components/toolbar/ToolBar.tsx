import DesktopToolBar from "./desktop/DesktopToolBar";
import MobileToolBar from "./mobile/MobileToolBar";

const ToolBar = ({ isDesktop }: { isDesktop: boolean }) => {
  if (isDesktop) {
    return <DesktopToolBar />;
  } else {
    return <MobileToolBar />;
  }
};

export default ToolBar;
