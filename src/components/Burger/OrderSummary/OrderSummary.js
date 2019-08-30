import React from "react";
import Aux from "../../../hoc/Auxi";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &.success {
    color: #5c9210;
  }

  &.danger {
    color: #944317;
  }
`;

class orderSummary extends React.Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your order.</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: ${this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button className="danger" onClick={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button className="success" onClick={this.props.purchaseSubmit}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default orderSummary;
