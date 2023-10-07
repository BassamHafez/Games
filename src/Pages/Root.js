import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "../Components/Navs/Navs";
import Footer from "../Components/Footer/Footer";
import ScrollButton from "../Components/Ui/ScrollButton";


const Root = () => {
  return (
    <>
      <Navs />
      <Outlet />
      <Footer />
      <ScrollButton/>
    </>
  );
};

export default Root;
