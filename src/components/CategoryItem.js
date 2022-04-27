import React, { Component } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Wrap = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 60vh;
  transition: all 0.3s ease-in-out;
`;
const Container = styled.div`
  max-width: 400px;
  min-width: 350px;
  margin: 10px;
  position: relative;
  cursor: pointer;
  &:hover ${Wrap} {
    background: rgba(0, 0, 0, 0.4);
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #fff;
  margin-bottom: 15px;
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartIcon = styled(AiOutlineShoppingCart)`
  height: 40px;
  width: 40px;
  padding: 5px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f3f3f3;
    transform: scale(1.1);
  }
`;
const HeartIcon = styled(AiOutlineHeart)`
  height: 40px;
  width: 40px;
  padding: 5px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f3f3f3;
    transform: scale(1.1);
  }
`;
class CategoryItem extends Component {
  render() {
    const { category } = this.props;
    return (
      <Container>
        <Wrap />
        <ImageContainer>
          <Image src={category.img} alt={category.title} />
        </ImageContainer>
        <Content>
          <Title>{category.title}</Title>
          <IconsWrapper>
            <CartIcon />
            <HeartIcon />
          </IconsWrapper>
        </Content>
      </Container>
    );
  }
}

export default CategoryItem;
