import React from "react";
import { LandingStyle } from "./style";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <LandingStyle>
      <Link to="/home">Start</Link>
    </LandingStyle>
  );
};

export default Landing;
