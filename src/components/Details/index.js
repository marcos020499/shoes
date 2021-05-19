import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import details1 from '../../../img/details1.jpg'
import details2 from '../../../img/details2.jpg'
import details3 from '../../../img/details3.jpg'
import details4 from '../../../img/details4.jpg'
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";
import Rating from "react-rating";

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
            <Ratings>
               <Rating 
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  fractions={2}
                  initialRating={3}
                  placeholderRating={2}
               />
            </Ratings>
            <H2>NIKE RUNNING SHOES AIR MAX 270</H2>
            <H4>Select your perfect shoes</H4>
            <ButtonsDiv>
               <Button>23 <Small>CM</Small></Button>
               <Button>24 <Small>CM</Small></Button>
               <Button>24.5 <Small>CM</Small></Button>
               <Button>25 <Small>CM</Small></Button>
               <Button>25.5 <Small>CM</Small></Button>
               <Button>26 <Small>CM</Small></Button>
               <Button>27 <Small>CM</Small></Button>
               <Button>27.5 <Small>CM</Small></Button>
               <Button>28 <Small>CM</Small></Button>
               <Button>28.5 <Small>CM</Small></Button>
               <Button>29 <Small>CM</Small></Button>
               <Button>30 <Small>CM</Small></Button>
            </ButtonsDiv>
            <ButtonBuy>Add to bag</ButtonBuy>
            <P>Get after those long runs with the Nike ZoomX Invincible Run Flyknit. A lightweight and responsive foam delivers a super-soft feel and helps deliver energy with every step. Breathable and secure, it's one of our most tested shoes. Lace up and feel the potential when your foot hits the pavement.</P>
            <Ratings>
               <H3>REVIEWS</H3>
               <Rating 
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  fractions={2}
                  initialRating={3}
                  placeholderRating={2}
                  onHover={(rate) => document.getElementById('label-onrate').innerHTML = rate || ''}
               />
            </Ratings>
         </ContainerDetails>
      </Content>
   )
}
export default index;
const Content = styled.div `
   display: flex;
   @media screen and (max-width: 768px){
      display: inline-block;
      width: 100%;
      padding-bottom: 135vw;
   }
`;
const ContainerImages = styled.div `
   display: inline-flexbox;
   width: 65%;
   height: 90%;
   padding-bottom: 0vw;
   @media screen and (max-width: 768px){
      width: 100%;
      height: 20%;
      display: inline-flexbox;
      justify-content: center;
      text-align: center;
      padding-bottom: 55vw;
   }
`;
const Image = styled.img `
   max-width: 48%;
   max-height: 55%;
   padding: 1%;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(2.05);
   }
   @media screen and (max-width: 768px){
      max-width: none;
      width: 40%;
      max-height: none;
      justify-content: end;
   }
`;
const ContainerDetails = styled.div `
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   width: 50%;
   height: 10%;
   @media screen and (max-width: 768px){
      width: 100%;
   }
`;
const Button = styled.button `
   font-size: 1.5vw;
   margin: 4% 2% 3% 1%;
   width: 10vw;
   height: 4vw;
   border-radius: 3px;
   background-color: white;
   border: 1px solid black;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.2);
      background: gray;
   }
   @media screen and (max-width: 768px){
      margin: 1%;
      font-size: 4vw;
      text-align: center;
      width: 20vw;
      height: 10vw;
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
      background: gray;
   }
   @media screen and (max-width: 768px){
      font-size: 5vw;
      width: 70vw;
      margin: 5vw 0 0 15vw;
      height: 10vw;
   }
`;
const Small = styled.small `
   font-size: 0.8vw;
   @media screen and (max-width: 768px){
      font-size: 2vw;
   }
`;
const ButtonsDiv = styled.div `
   display: inline-block;
   margin-left: 30px;
`;
const H2 = styled.h2 `
   font-size: 2.6vw;
   padding: 0 0 0 2%;
   font-weight: bolder;
   @media screen and (max-width: 768px){
      font-size: 5vw;
      text-align: center;
   }
`;
const H3 = styled.h3 `
   display: flex;
   font-size: 1.8vw;
   @media screen and (max-width: 768px){
      font-size: 4vw;
      text-align: center;
   }
`;
const H4 = styled.h4 `
   display: flex;
   padding: 0 0 0 2%;
   font-size: 1.6vw;
   @media screen and (max-width: 768px){
      padding: 0%;
      font-size: 4vw;
      justify-content: center;
      text-align: center;
   }
`;
const P = styled.p `
   color: rgb(126, 46, 255);
   font-size: 1.7vw;
   justify-content: justify;
   @media screen and (max-width: 768px){
      font-size: 4vw;
      padding: 4vw;
      text-align: justify;
   }
`;
const Ptitle = styled(P) `
   color: gray;
   padding: 0 0 0 2%;
   font-size: 1.9vw;
   justify-content: justify;
   @media screen and (max-width: 768px){
      font-size: 4.5vw;
      text-align: center;
   }
`;
const Ratings = styled.div `
   display: flex;
   @media screen and (max-width: 768px){
      display: flex;
      justify-content: center;
      font-size: 4.5vw;
   }
`;