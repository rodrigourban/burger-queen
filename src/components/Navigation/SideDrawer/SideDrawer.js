import React from "react";
import styled from "styled-components";
import Logo from "../Toolbar/Logo";
import Items from "../Items/Items";
import Backdrop from "../../UI/BackDrop/Backdrop";
import Aux from "../../../hoc/Auxi";
const SideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }
`;

const sideDrawer = props => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.toggle} />
      <SideDrawer className={props.open ? "open" : "close"}>
        <Logo height="11%" margin="20px" />
        <nav>
          <Items />
        </nav>
      </SideDrawer>
    </Aux>
  );
};

export default sideDrawer;
