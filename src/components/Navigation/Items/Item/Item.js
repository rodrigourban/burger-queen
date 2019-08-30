import React from "react";
import styled from "styled-components";

const Item = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: auto;
  align-items: center;

  @media (max-width: 500px) {
    margin: 0;
    display: block;
    width: 100%;
  }
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;

    :hover {
      background-color: #8f5c2c;
    }

    &.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
    }
  }

  @media (max-width: 500px) {
    color: #8F5C2C;
    width: 100%;
    display: block;

    &.active {
      color: #40A4C8;
      background-color: white;
      border-bottom: none;
    }
  }
`;

const navigationItem = props => (
  <Item>
    <A href={props.link} className={props.active ? "active" : null}>
      {props.children}
    </A>
  </Item>
);

export default navigationItem;
