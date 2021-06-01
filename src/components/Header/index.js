import React from "react";
import { Container, Navbar, Title, Linken } from "./style";

const index = () => {
  return (
    <Container>
      <Title>MARCOS SHOES</Title>
      <Navbar>
        <Linken to="/">HOME</Linken>
        <Linken to="/">SHOP</Linken>
        <Linken to="/contact">CONTACT</Linken>
        <Linken to="/">SIGN IN</Linken>
      </Navbar>
    </Container>
  );
};
export default index;
