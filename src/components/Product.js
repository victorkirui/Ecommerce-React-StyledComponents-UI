import React, { Component } from "react";
import styled from "styled-components";

const Circle = styled.div`
  content: "";
  height: 250px;
  width: 250px;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  background: rgb(0, 128, 128, 0.1);
`;
const Container = styled.div`
  min-width: 250px;
  height: 50vh;
  margin: 50px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgb(0, 128, 128, 0.2);
  cursor: pointer;

  &:hover ${Circle} {
    background: rgb(0, 128, 128, 0.3);
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  z-index: 10;
`;

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <Container>
        <ImageContainer>
          <Circle />
          <Image src={product.img} alt="single product" />
        </ImageContainer>
      </Container>
    );
  }
}

export default Product;
