import Content from '../components/Content'
import React from "react";
import { createGlobalStyle } from 'styled-components'
import Slice from '../components/Slice'

const index = () => {
  return (
    <>
        <GlobalStyle/>
        <Content/>
    </>
  );
}
export default index;
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    background: linear-gradient(rgb(194, 194, 194), gray);
    font-family: 'Inconsolata', monospace;
  }
`
