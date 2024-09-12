import DesktopFooter from "./desktop/DesktopFooter";
import MobileFooter from "./mobile/MobileFooter";

const Footer = ({ isDesktop }: { isDesktop: boolean }) => {
  if (isDesktop) {
    return <DesktopFooter />;
  } else {
    return <MobileFooter />;
  }
};

export default Footer;
