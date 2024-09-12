import { Outlet } from "react-router-dom";
import ToolBar from "../toolbar/ToolBar";
import Footer from "../footer/Footer";
import useDesktop from "../../hooks/useDesktop";

const Layout = () => {
  const isDesktop = useDesktop();

  return (
    <>
      <ToolBar isDesktop={isDesktop} />
      <main>
        <Outlet />
      </main>
      <Footer isDesktop={isDesktop} />
    </>
  );
};

export default Layout;
