import React, { Component } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import SliderItem from "./SliderItem";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  position: absolute;
`;

const initialState = {
  index: 0,
};
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: initialState.index,
    };
  }

  handleClickLeft = () => {
    if (this.state.sliderIndex > 0 && this.state.sliderIndex < 3) {
      this.setState({
        sliderIndex: this.state.sliderIndex - 1,
      });
    } else {
      this.setState({
        sliderIndex: 2,
      });
    }
  };

  handleClickRight = () => {
    if (this.state.sliderIndex >= 0 && this.state.sliderIndex < 2) {
      this.setState({
        sliderIndex: this.state.sliderIndex + 1,
      });
    } else {
      this.setState({
        sliderIndex: initialState.index,
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <AiOutlineCaretLeft
          onClick={this.handleClickLeft}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            left: "20px",
            cursor: "pointer",
            zIndex: 10,
          }}
        />
        <AiOutlineCaretRight
          onClick={this.handleClickRight}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            right: "20px",
            cursor: "pointer",
            zIndex: 10,
          }}
        />
        {sliderItems.map((item) => (
          <SliderItem
            item={item}
            handleClick={this.handleClick}
            sliderIndex={this.state.sliderIndex}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Slider;
