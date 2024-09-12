import { Outlet } from "react-router-dom";
import ToolBar from "../toolbar/ToolBar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <ToolBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
