import React from "react";
import headerBg from "../assets/img/header-bg.jpg";

function Header({ title }) {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${headerBg})`,
  };
  return (
    <div className="header w-100" style={style}>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
