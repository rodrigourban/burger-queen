import React from "react";
import styled from "styled-components";
import log from "../../../assets/logo.PNG";

const Logo = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 15%;

  img {
    height: 100%;
  }
`;

const logo = props => (
  <Logo style={{ height: props.height, marginBottom: props.margin }}>
    <img src={log} alt="A tasty burguer" />
  </Logo>
);

export default logo;
