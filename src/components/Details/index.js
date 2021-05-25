import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import Rating from "react-rating";
import { Link, withRouter} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Component } from 'react';
import axios from 'axios';
import {Content, ContainerImages, Image, Ptitle, Ratings, H2, H4, Button, ButtonBuy, ButtonsDiv, Small, P, ContainerDetails} from './style'

class index extends Component {
   constructor(props) {
      super(props)
      this.state = {
        data: [],
        _id: '',
        title: '',
        images: [],
        price: '',
        description: '',
      }
    }
    componentDidMount(){
      const id = this.props.match.params.id;
      axios.get(`http://localhost:5000/api/product/filtrar/${id}`)
        .then(res => {
          const {_id, title, images, price, description } = res.data
          this.setState({
            _id,
            title,
            images, 
            price,
            description,
          });
  
        })
        .catch(err => {
          toast.warn("No se puede mostrar la información - " + err)
        })
    }
    render() {
       const { data } = this.state;
      const { title, images, price, description} = this.state;
   return (
      <Content>
         <ContainerImages>
                  {images.map((image, index) => (
                      <Image src={`http://localhost:5000/${image}`} alt="productImage" />
                  ))
               }
         </ContainerImages>
         <ContainerDetails>
         <Ptitle>{description}</Ptitle>
            <Ratings>
               <Rating 
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  fractions={2}
                  initialRating={3}
                  placeholderRating={2}
               />
            </Ratings>
            <H2>{title}</H2>
            <H4>{price}</H4>
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
}
export default withRouter(index);
