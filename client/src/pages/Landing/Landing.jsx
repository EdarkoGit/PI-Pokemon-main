import React from "react";
import { LandingStyle } from "./style";
import { Link } from "react-router-dom";
import { Btn } from "../../components/Btn/Btn";

const Landing = () => {
  return (
    <LandingStyle>
      <Link to="/home">
        <Btn>Start</Btn>
      </Link>
    </LandingStyle>
  );
};

export default Landing;
