import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import details1 from '../../../img/details1.jpg'
import details2 from '../../../img/details2.jpg'
import details3 from '../../../img/details3.jpg'
import details4 from '../../../img/details4.jpg'
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Rating from "react-rating";
const slideImages = [
   {details1},
   {details2},
   {details3},
   {details4},
 ];
 const index = () => {
   return (
     <div className="slide-container">
       <Slide>
         <div className="each-slide">
           <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
             <span>Slide 1</span>
           </div>
         </div>
         <div className="each-slide">
           <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             <span>Slide 2</span>
           </div>
         </div>
         <div className="each-slide">
           <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             <span>Slide 3</span>
           </div>
         </div>
       </Slide>
     </div>
   )
}
export default index