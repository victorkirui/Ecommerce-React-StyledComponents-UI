import React, { Component } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
class Products extends Component {
  render() {
    return (
      <Container>
        {popularProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    );
  }
}

export default Products;
