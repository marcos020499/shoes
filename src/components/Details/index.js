import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import details1 from '../../../img/details1.jpg'
import details2 from '../../../img/details2.jpg'
import details3 from '../../../img/details3.jpg'
import details4 from '../../../img/details4.jpg'
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";

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
            <Ptitle>Men's running shoes</Ptitle>
            <H2>NIKE RUNNING SHOES AIR MAX 270</H2>
            <H4>Select your perfect shoes</H4>
            <ButtonsDiv>
               <Button>23 <small>CM</small></Button>
               <Button>24 <small>CM</small></Button>
               <Button>24.5 <small>CM</small></Button>
               <Button>25 <small>CM</small></Button>
               <Button>25.5 <small>CM</small></Button>
               <Button>26 <small>CM</small></Button>
               <Button>27 <small>CM</small></Button>
               <Button>27.5 <small>CM</small></Button>
               <Button>28 <small>CM</small></Button>
               <Button>28.5 <small>CM</small></Button>
               <Button>29 <small>CM</small></Button>
               <Button>30 <small>CM</small></Button>
            </ButtonsDiv>
            <ButtonBuy>Add to bag</ButtonBuy>
            <P>Get after those long runs with the Nike ZoomX Invincible Run Flyknit. A lightweight and responsive foam delivers a super-soft feel and helps deliver energy with every step. Breathable and secure, it's one of our most tested shoes. Lace up and feel the potential when your foot hits the pavement.</P>
            <Rating>
               <H3>REVIEWS</H3>
               <ReactStars
                  count={3.4}
                  size={40}
                  color={"black"}
                  color2={'#ffd700'}
               />
            </Rating>
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
   font-size: 1.8vw;
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
   font-size: 2.6vw;
   padding: 0 0 0 2%;
   font-weight: bolder;
`;
const H3 = styled.h3 `
   display: flex;
   font-size: 1.8vw;
`;
const H4 = styled.h4 `
   display: flex;
   padding: 0 0 0 2%;
   font-size: 1.6vw;
`;
const P = styled.p `
   color: rgb(126, 46, 255);
   font-size: 1.7vw;
   justify-content: justify;
   @media screen and (max-width: 768px){
      font-size: 6vw;
      text-align: center;
   }
`;
const Ptitle = styled(P) `
   color: gray;
   padding: 0 0 0 2%;
   font-size: 1.9vw;
   justify-content: justify;
   @media screen and (max-width: 768px){
      font-size: 6vw;
      text-align: center;
   }
`;
const Rating = styled.div `
   display: flex;
   @media screen and (max-width: 768px){
   }
`;