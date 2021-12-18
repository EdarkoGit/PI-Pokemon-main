import React from "react";
import { NavbarStyle } from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyle>
      <ul className="list">
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="create">Create</Link>
        </li>
        <li>
          <Link to="delete">Delete</Link>
        </li>
      </ul>
    </NavbarStyle>
  );
};

export default Navbar;
