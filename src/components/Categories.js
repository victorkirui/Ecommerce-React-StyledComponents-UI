import React, { Component } from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
  padding: 80px 0px;
  background: mistyrose;
`;
class Categories extends Component {
  render() {
    return (
      <Container>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Container>
    );
  }
}

export default Categories;
