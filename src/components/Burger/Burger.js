import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient/Ingredient";

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
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
