import React from 'react';
import './style.css'
import black from '../../../img/black.png'
import white from '../../../img/white.png'
import red from '../../../img/red.png'
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const index = () => {
   return (
      <ContainerContent>
         <Card>
            <Image src={black} alt="black shoes"/>
            <H3>The Best Color</H3>
            <A href="/"><Icon className='fa fa-shopping-cart'></Icon></A>
         </Card>
         <Card>
            <Image src={white} alt="white shoes"/>
            <H3>The Best Shoes</H3>
            <A href="/"><Icon className='fa fa-shopping-cart'></Icon></A>
         </Card>
         <Card>
            <Image src={red} alt="red shoes"/>
            <H3>The Best People</H3>
            <A href="/"><Icon className='fa fa-shopping-cart'></Icon></A>
         </Card>
      </ContainerContent>
   )
}
export default index;
const ContainerContent = styled.div `
   display: flex;
   margin: 1%;
   @media screen and (max-width: 768px){
      display: inline-block;
      border-radius: 10px;
      margin: 4vw;
   }
`;
const Card = styled.div `
   border: 1px solid gray;
   background: white;
   margin: 0.3%;
   @media screen and (max-width: 768px){
      margin: 2%;
   }
`;
const Image = styled.img `
   max-width: 95%;
`;
const H3 = styled.h3 `
   color: black;
   font-size: 2.1vw;
   font-weigth: bold;
   display: flex;
   justify-content: center;
   @media screen and (max-width: 768px){
      font-size: 4vw;
   }
`;
const A = styled.a`
   font-size: 3vw;
   display: flex;
   justify-content: flex-end;
   @media screen and (max-width: 768px){
      font-size: 6vw;
      margin: 0 4vw 4vw 0;
   }
`;
const Icon = styled.li`
   margin: 3vw;
   color: black;
   &:hover {
      color: purple;
    }
`;