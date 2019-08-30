import React from "react";
import styled from "styled-components";
import Backdrop from "../BackDrop/Backdrop";
import Aux from "../../../hoc/Auxi";

const Modal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%,
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

class modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClose} />
        <Modal
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)"
          }}
        >
          {this.props.children}
        </Modal>
      </Aux>
    );
  }
}

export default modal;
