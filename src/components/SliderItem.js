import React, { Component } from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  transform: translateX(
    ${(props) =>
      props.sliderIndex === 0
        ? "0vw"
        : props.sliderIndex === 1
        ? "-100vw"
        : "-200vw"}
  );
`;
const ImageContainer = styled.div`
  flex: 1;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 80%;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  padding: 0 50px;
  width: 50vw;
  box-sizing: border-box;
  position: relative;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
`;
const Des = styled.p`
  margin: 20px 0px;
  font-size: 18px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  background: transparent;
`;

class SliderItem extends Component {
  render() {
    const { item, sliderIndex } = this.props;
    return (
      <Container sliderIndex={sliderIndex}>
        <ImageContainer>
          <Image src={item.img} alt={item.title} />
        </ImageContainer>

        <ContentContainer>
          <Title>{item.title}</Title>
          <Des>{item.desc}</Des>
          <Button>
            Shop Now <BsFillCaretRightFill style={{ marginLeft: "10px" }} />
          </Button>
        </ContentContainer>
      </Container>
    );
  }
}

export default SliderItem;
