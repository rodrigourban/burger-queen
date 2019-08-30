import React from "react";
import styled from "styled-components";

const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const backdrop = props =>
  props.show ? <BackDrop onClick={props.clicked} /> : null;

export default backdrop;
