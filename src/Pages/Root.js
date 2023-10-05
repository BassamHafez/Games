import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "../Components/Navs/Navs";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
        <Navs />
        <Outlet />
      <Footer />
    </>
  );
};

export default Root;
