import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import details1 from '../../../img/details1.jpg'
import details2 from '../../../img/details2.jpg'
import details3 from '../../../img/details3.jpg'
import details4 from '../../../img/details4.jpg'
import styled from 'styled-components';

const index = () => {
   return (
      <Content>
         <ContainerImages>
            <Image src={details1} alt='details 1'/>
            <Image src={details2} alt='details 2'/>
            <Image src={details3} alt='details 3'/>
            <Image src={details4} alt='details 4'/>
         </ContainerImages>
         <ContainerDetails>
            <H2>NIKE RUNNING SHOES AIR MAX 270</H2>
            <H2>Select your perfect shoes</H2>
            <ButtonsDiv>
               <Button>23 CM</Button>
               <Button>24 CM</Button>
               <Button>24.5 CM</Button>
               <Button>25 CM</Button>
               <Button>25.5 CM</Button>
               <Button>26 CM</Button>
               <Button>27 CM</Button>
               <Button>27.5 CM</Button>
               <Button>28 CM</Button>
               <Button>28.5 CM</Button>
               <Button>29 CM</Button>
               <Button>30 CM</Button>
            </ButtonsDiv>
            <ButtonBuy>Buy this product</ButtonBuy>
         </ContainerDetails>
      </Content>
   )
}
export default index;
const Content = styled.div `
   display: flex;
`;
const Image = styled.img `
   max-width: 48%;
   max-height: 55%;
   padding: 1%;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
   }
`;
const ContainerImages = styled.div `
   display: inline-flexbox;
   width: 65%;
   height: 10%
   @media screen and (max-width: 768px){
   }
`;
const ContainerDetails = styled.div `
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   width: 50%;
   height: 10%
   @media screen and (max-width: 768px){
   }
`;
const Button = styled.button `
   font-size: 1.5vw;
   margin: 1%;
   width: 12vw;
   height: 6vw;
   border-radius: 5px;
   background-color: white;
   border: 1px solid black;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
      background: purple;
   }
`;
const ButtonBuy = styled.button `
   font-size: 2vw;
   margin: 1%;
   width: 38vw;
   height: 6vw;
   border-radius: 5px;
   background-color: black;
   border: 1px solid black;
   color: white;
   &:hover {
      background: purple;
   }
`;
const ButtonsDiv = styled.div `
   display: inline-block;
`;
const H2 = styled.h2 `
   font-size: 1.6vw;
   padding: 2%;
   border-radius: 5px;
`;