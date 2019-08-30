import React from "react";
import styled from "styled-components";
import Item from "./Item/Item";
const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 500px) {
    flex-flow: column;
    &.desktopOnly {
      display: none;
    }
  }
`;

const navigationItems = props => (
  <Navigation className={props.desktop ? "desktopOnly" : null}>
    <Item link="/" active={true}>
      Burguer Builder
    </Item>
    <Item link="/">Checkout</Item>
  </Navigation>
);

export default navigationItems;
