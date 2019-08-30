import React from "react";
import styled from "styled-components";
import Navigation from "../Items/Items";
import Logo from "./Logo";

const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const Menu = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;

  div {
    width: 90%;
    height: 4px;
    background-color: white;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const toolbar = props => (
  <Toolbar>
    <Menu onClick={props.toggle}>
      <div></div>
      <div></div>
      <div></div>
    </Menu>
    <Logo height="80%" />
    <Navigation desktop />
  </Toolbar>
);

export default toolbar;
