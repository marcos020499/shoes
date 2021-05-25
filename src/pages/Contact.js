import Contact from '../components/Contact'
import React from "react";
import { createGlobalStyle } from 'styled-components'

const index = () => {
  return (
    <>
        <GlobalStyle/>
        <Contact/>
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