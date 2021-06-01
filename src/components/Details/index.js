import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import Rating from "react-rating";
import { Link, withRouter, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Component } from "react";
import firebase from "../firebase/firebase";
import {
  Content,
  ContainerImages,
  Image,
  Ptitle,
  Ratings,
  H2,
  H4,
  H3,
  Button,
  ButtonBuy,
  ButtonsDiv,
  Small,
  P,
  ContainerDetails,
} from "./style";

const useItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});
  const [images, setImages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firebase
          .firestore()
          .collection("product")
          .doc(id)
          .get();

        console.log("response", response);

        let data = { title: "not found" };

        if (response.exists) {
          data = response.data();
        }

        setItems(data);
        setImages(data.images);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <Content>
      <ContainerImages>
        {images.map((image, index) => (
          <Image src={image} alt="productImage" />
        ))}
      </ContainerImages>
      <ContainerDetails>
        <Ptitle>{items.description}</Ptitle>
        <Ratings>
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            initialRating={3}
            placeholderRating={2}
          />
        </Ratings>
        <H2>{items.title}</H2>
        <H4>{items.price}</H4>
        <ButtonsDiv>
          <Button>
            23 <Small>CM</Small>
          </Button>
          <Button>
            24 <Small>CM</Small>
          </Button>
          <Button>
            24.5 <Small>CM</Small>
          </Button>
          <Button>
            25 <Small>CM</Small>
          </Button>
          <Button>
            25.5 <Small>CM</Small>
          </Button>
          <Button>
            26 <Small>CM</Small>
          </Button>
          <Button>
            27 <Small>CM</Small>
          </Button>
          <Button>
            27.5 <Small>CM</Small>
          </Button>
          <Button>
            28 <Small>CM</Small>
          </Button>
          <Button>
            28.5 <Small>CM</Small>
          </Button>
          <Button>
            29 <Small>CM</Small>
          </Button>
          <Button>
            30 <Small>CM</Small>
          </Button>
        </ButtonsDiv>
        <ButtonBuy>Buy</ButtonBuy>
        <P>
          Get after those long runs with the Nike ZoomX Invincible Run Flyknit.
          A lightweight and responsive foam delivers a super-soft feel and helps
          deliver energy with every step. Breathable and secure, it's one of our
          most tested shoes. Lace up and feel the potential when your foot hits
          the pavement.
        </P>
        <Ratings>
          <H3>REVIEWS</H3>
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            initialRating={3}
            placeholderRating={2}
            onHover={(rate) =>
              (document.getElementById("label-onrate").innerHTML = rate || "")
            }
          />
        </Ratings>
      </ContainerDetails>
    </Content>
  );
};
export default useItems;
