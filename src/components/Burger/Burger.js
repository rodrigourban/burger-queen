import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient/Ingredient";

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 320px;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) {
    height: 250px;
    width: 400px;
  }

  @media (max-width: 360px) {
    height: 230px;
  }
`;

const burger = props => {
  let newIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <Ingredient type={igKey} key={igKey + i} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (newIngredients.length === 0) {
    newIngredients = <p>Please add some ingredients!</p>;
  }
  return (
    <Burger>
      <Ingredient type="bread-top" />
      {newIngredients}
      <Ingredient type="bread-bottom" />
    </Burger>
  );
};
export default burger;
