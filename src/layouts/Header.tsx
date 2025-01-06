import React from "react";
import images from "../assets/images";
import Styled from "../styles/layoutStyle/header.styled";

const Header = () => {
  const { logo } = images;
  return (
    <Styled.Header>
      <img src={logo} alt="logo" height={10} width={10}/>
    </Styled.Header>
  );
};

export default Header;
