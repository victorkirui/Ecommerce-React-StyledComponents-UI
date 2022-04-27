import React, { Component } from "react";
import styled from "styled-components";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #f3f3f3;
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
const Lang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const InputContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
const Input = styled.input`
  padding: 6px;
  display: block;
  position: relative;
  border: none;
  outline: none;
`;
const Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
const Register = styled.div`
  margin-right: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;
const Login = styled.div`
  margin-right: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Left>
          <Lang>
            EN <FaCaretDown />{" "}
          </Lang>
          <InputContainer>
            <Input placeholder="search" />
            <FaSearch style={{ color: "rgba(0,0,0,0.4)" }} />
          </InputContainer>
        </Left>
        <Logo>VDEX</Logo>
        <Right>
          <Register>Register</Register>
          <Login>Login</Login>
          <BsCart style={{ cursor: "pointer", fontWeight: "600" }} />
        </Right>
      </Container>
    );
  }
}

export default Navbar;
