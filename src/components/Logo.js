import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
export default function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Logo" />
    </Link>
  );
}
