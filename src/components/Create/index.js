import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { Link } from "react-router-dom";
import { Title, 
  ContainerContact, 
  Input, 
  Button, 
  InputMessage 
} from "./style";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleOnChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleOnChangeImages = (e) => {
    setImages(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("product")
      .add({
        title,
        description,
        price,
        images,
      })
      //.then will reset the form to nothing
      .then(
        () => setTitle(""),
        setDescription(""),
        setPrice(""),
        setImages([])
      ),
      alert(`the info was send, welcome`);
  };
  return (
    <form onSubmit={onSubmit}>
      <Title>CONTACT</Title>
      <ContainerContact>
        <h2>PERSONAL INFO</h2>
        <h3>Title</h3>
        <Input
          type="text"
          placeholder="title"
          value={title}
          name="title"
          onChange={handleOnChangeTitle}
          required
        />
        <h3>Description</h3>
        <Input
          type="text"
          placeholder="description"
          value={description}
          name="description"
          onChange={handleOnChangeDescription}
          required
        />
        <h3>Price</h3>
        <Input
          type="text"
          placeholder="price"
          value={price}
          name="price"
          onChange={handleOnChangePrice}
          required
        />
        <h3>Images</h3>
        <Input
          type="text"
          placeholder="images"
          value={images}
          name="images"
          onChange={handleOnChangeImages}
          required
        />
        <Button type="submit">Submit</Button>
      </ContainerContact>
    </form>
  );
}

export default Create;
