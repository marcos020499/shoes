import { Link } from "react-router-dom";
import wallpaper from "../../../img/wallpaper.jpg";
import wallpaper2 from "../../../img/wallpaper2.jpg";
import "font-awesome/css/font-awesome.min.css";
import ReactStars from "react-rating-stars-component";
import { Slide } from "react-slideshow-image";
import firebase from "../firebase/firebase";
import React, { useEffect, useState } from "react";
import {
  ImageBanner,
  Slides,
  ContainerContent,
  Icon,
  Linken,
  Description,
  Card,
  Image,
  H3,
  H4,
  A,
  Rating,
  P,
} from "./style";
const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("product")
      .onSnapshot((snapshot) => {
        const listItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(listItems);
      });
  }, []);
  return items;
};
const ItemList = () => {
  const listItem = useItems();
  return (
    <>
      <Slides>
        <Slide easing="ease">
          <div className="each-slide">
            <ImageBanner src={wallpaper} />
          </div>
          <div className="each-slide">
            <ImageBanner src={wallpaper2} />
          </div>
        </Slide>
      </Slides>
      <P>The best option for today, tomorrow and always</P>
      <ContainerContent>
        {listItem.map((item, index) => (
          <Link to={`/details/${item.id}`}>
            <Card key={index}>
              <Slide>
                {item.images.map((image, index) => (
                  <div key={index}>
                    <Image src={image} alt="productImage" />
                  </div>
                ))}
              </Slide>
              <H3>{item.title}</H3>
              <Description>{item.description}</Description>
              <H4>{item.price}</H4>
              <A href="/">
                <Icon className="fa fa-shopping-cart"></Icon>
              </A>
              <Rating>
                <ReactStars count={5} size={30} activeColor="#ffd711" />
              </Rating>
              <Linken to={"/details/" + item._id}>More info</Linken>
            </Card>
          </Link>
        ))}
      </ContainerContent>
    </>
  );
};
export default ItemList;
