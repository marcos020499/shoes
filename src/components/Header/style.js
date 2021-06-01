import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: initial;
`;
export const Title = styled.h1`
  font-size: 4vw;
  padding: 20px 0 0 30px;
  @media screen and (max-width: 768px) {
    font-size: 8vw;
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Linken = styled(Link)`
  font-size: 2.1vw;
  font-weigth: bold;
  margin: 0 6vw 0 6vw;
  color: black;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    color: rgb(45, 2, 113);
  }
  @media screen and (max-width: 768px) {
    font-size: 4.3vw;
    margin-bottom: 4px;
    text-align: center;
  }
`;
