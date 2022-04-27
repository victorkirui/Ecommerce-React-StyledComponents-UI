import React, { Component } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Slider />
      </Container>
    );
  }
}

export default Home;
