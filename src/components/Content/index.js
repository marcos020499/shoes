import React from 'react';
import './style.css'
import black from '../../../img/black.png'
import white from '../../../img/white.png'
import red from '../../../img/red.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import wallpaper from '../../../img/wallpaper.jpg'
import 'font-awesome/css/font-awesome.min.css';
import ReactStars from "react-rating-stars-component";

const index = () => {
   return (
      <>
      <ImageBanner src={wallpaper} alt="wallpaper content"/>
      <P>The best option for today, tomorrow and always</P>
      <ContainerContent>
         <Card>
            <Image src={black} alt="black shoes"/>
            <H3>The Best Color</H3>
            <Description>Men's running shoes</Description>
            <A href="/"><Icon className='fa fa-shopping-cart'></Icon></A>
            <H4>180 $</H4>
            <Rating>
               <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd711"
               />
            </Rating>
            <Linken to='/details'>More info</Linken>
         </Card>
         <Card>
            <Image src={white} alt="white shoes"/>
            <H3>The Best Shoes</H3>
            <Description>Men's shoes</Description>
            <A href="/"><Icon className='fa fa-shopping-cart'></Icon></A>
            <H4>195 $</H4>
            <Rating>
               <ReactStars
                  count={3}
                  size={24}
                  activeColor="#ffd711"
               />
            </Rating>
            <Linken to='/details'>More info</Linken>
         </Card>
         <Card>
            <Image src={red} alt="red shoes"/>
            <H3>The Best People</H3>
            <Description>Men's running shoes</Description>
            <A href="/"><Icon className='fa fa-shopping-cart'></Icon></A>
            <H4>150 $</H4>
            <Rating>
               <ReactStars
                  count={4.5}
                  size={24}
                  activeColor="#ffd711"
               />
            </Rating>
            <Linken to='/details'>More info</Linken>
         </Card>
      </ContainerContent>
      </>
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
const Rating = styled.div `
   display: flex;
   margin: 0 0 0 2vw;
   @media screen and (max-width: 768px){
   }
`;
const Description = styled.a `
   display: flex;
   font-size: 1.8vw;
   color: gray;
   justify-content: center;
   @media screen and (max-width: 768px){
   }
`;
const Card = styled.div `
   border: 1px solid gray;
   background: white;
   margin: 0.3%;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
   }
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
const H4 = styled.h4 `
   color: black;
   margin: 0 0 0 2vw;
   font-size: 2.1vw;
   font-weigth: bold;
   display: flex;
   justify-content: start;
   @media screen and (max-width: 768px){
      font-size: 4vw;
   }
`;
const A = styled.a`
   font-size: 2.5vw;
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
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
      color: purple;
   }
`;
const Linken = styled(Link) `
   font-size: 2.1vw;
   font-weigth: bolder;
   margin: 0 6vw 2vw 2vw;
   color: purple;
   text-decoration: none;
   display: flex;
   justify-content: start;
   &:hover {
      font-weight: bold;
      color: rgb(45, 2, 113);
   }
   @media screen and (max-width: 768px){
      font-size: 4.3vw;
      margin-bottom: 4px;
      text-align: center;
   }
`;
const P = styled.p `
   position: absolute;
   color: white;
   font-size: 5vw;
   top: 20vw;
   margin: 10px;
   @media screen and (max-width: 768px){
      top: 50vw;
      font-size: 6vw;
      text-align: center;
   }
`;
const ImageBanner = styled.img `
   max-width: 100%;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
   }
   @media screen and (max-width: 768px){
      height: 60vw;
   }
`;