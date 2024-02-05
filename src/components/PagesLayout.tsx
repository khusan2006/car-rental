import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PagesBanner from "./PagesBanner";

const PagesLayout = () => {
  return (
    <>
      <Outlet />
      <PagesBanner />
      <Footer />
    </>
  );
};

export default PagesLayout;
