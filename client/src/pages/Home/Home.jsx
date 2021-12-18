import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { HomeStyle } from "./style";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <HomeStyle>
      <Navbar />
      <Outlet />
    </HomeStyle>
  );
};

export default Home;
