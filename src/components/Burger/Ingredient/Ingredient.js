import React from "react";
import {
  BreadBottom,
  BreadTop,
  Seeds,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon
} from "./Styled";
import PropTypes from "prop-types";

class Ingredient extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <BreadBottom />;
        break;
      case "bread-top":
        ingredient = (
          <BreadTop>
            <Seeds />
            <Seeds2 />
          </BreadTop>
        );
        break;
      case "meat":
        ingredient = <Meat />;
        break;
      case "cheese":
        ingredient = <Cheese />;
        break;
      case "salad":
        ingredient = <Salad />;
        break;
      case "bacon":
        ingredient = <Bacon />;
        break;
    }

    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;
