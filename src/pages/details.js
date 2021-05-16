import Details from '../components/Details'
import React from "react";
import { createGlobalStyle } from 'styled-components'

const index = () => {
  return (
    <>
        <GlobalStyle/>
        <Details/>
    </>
  );
}
export default index;
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    background: linear-gradient(white, gray);
    font-family: 'Inconsolata', monospace;
  }
`