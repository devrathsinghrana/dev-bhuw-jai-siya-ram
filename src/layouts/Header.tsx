import React from "react";
import images from "../assets/images";

const Header = () => {
  const { logo } = images;
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
