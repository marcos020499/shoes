import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const ContainerContent = styled.div `
   display: inline-block;
   margin: 1%;
   width: 100%;
   @media screen and (max-width: 768px){
      display: inline-block;
      border-radius: 10px;
      margin: 4vw;
   }
`;
export const Rating = styled.div `
   display: flex;
   margin: 0 0 0 2vw;
   @media screen and (max-width: 768px){
      font-size: 5vw;
      margin: -0vw 0 0 10vw;
   }
`;
export const Description = styled.a `
   display: flex;
   font-size: 1.8vw;
   color: gray;
   justify-content: center;
   @media screen and (max-width: 768px){
      font-size: 4.4vw;
   }
`;
export const Card = styled.div `
   border: 1px solid gray;
   background: white;
   width: 31.7%;
   max-height: 80%;
   min-height: 80%;
   display: inline-block;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
   }
   @media screen and (max-width: 768px){
      margin: 2%;
   }
`;
export const Image = styled.img `
   max-width: 55%;
   min-width: 55%;
   max-height: 15%;
   min-height: 15%;
`;
export const H3 = styled.h3 `
   color: black;
   font-size: 2.1vw;
   font-weigth: bold;
   display: flex;
   justify-content: center;
   @media screen and (max-width: 768px){
      font-size: 4vw;
   }
`;
export const H4 = styled.h4 `
   color: black;
   margin: 0 0 0 2vw;
   font-size: 2.1vw;
   font-weigth: bold;
   display: flex;
   justify-content: start;
   @media screen and (max-width: 768px){
      font-size: 4.5vw;
      margin: 0vw 0 0 10vw;
   }
`;
export const A = styled.a`
   font-size: 2.5vw;
   display: flex;
   justify-content: flex-end;
   @media screen and (max-width: 768px){
      position: relative;
      font-size: 6vw;
      margin: 0 10vw 1vw 0;
      top: 15vw;
   }
`;
export const Icon = styled.li`
   margin: 3vw;
   color: black;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
      color: purple;
   }
`;
export const Linken = styled(Link) `
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
      font-size: 5vw;
      margin-bottom: 4px;
      text-align: center;
      margin: 0vw 0 0 10vw;
      padding-bottom: 5vw;
   }
`;
export const P = styled.p `
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
export const ImageBanner = styled.img `
   max-width: 100%;
   transition: width 1s, height 1s, transform 1s;
   &:hover {
      transform : scale(1.05);
   }
   @media screen and (max-width: 768px){
      width: 100%;
      height: 60vw;
   }
`;
export const Slides = styled.div `
   margin: 2vw 0 0 0;
   :button {
      display: none;
   }
`;