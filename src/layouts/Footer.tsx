import React from "react";
import Container from "../components/ui/Container";
import Styled from "../styles/layoutStyle/footer.styled";

const Footer = () => {
  return (
    <Styled.Footer>
      <Container contBodyClass="header-cont-body" hasColumnsView>
        <span className="copyright-text footer-item">
          © 2025, Company Lorem ipsum.
        </span>
        <p className="services-details footer-item">
         Lorem ipsum
          <svg width="12px" height="17px" viewBox="0 0 512 512">
            <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"></path>
          </svg>
          <span>08 05 08 66 00</span>
          <br />
          <span>Lorem ipsum - 08 34 234</span>
        </p>
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
