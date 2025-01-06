import React from "react";
import images from "../assets/images";
import Styled from "../styles/layoutStyle/header.styled";
import Container from "../components/ui/Container";

const Header = () => {
  const { logo } = images;
  return (
    <Styled.Header>
      <Container>
        <img src={logo} alt="logo" height={25} width={25} />
      </Container>
    </Styled.Header>
  );
};

export default Header;
