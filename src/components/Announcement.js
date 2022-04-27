import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: teal;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
`;

class Announcement extends Component {
  render() {
    return <Container>Super Deal! Free shipping on order above $500</Container>;
  }
}

export default Announcement;
