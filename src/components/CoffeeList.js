import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee
        whenCoffeeClicked={props.onCoffeeSelection}
        name = {coffee.name}
        price = {coffee.price}
        origin = {coffee.origin}
        roast = {coffee.roast}
        quantity = {coffee.quantity}
        id = {coffee.id}
        key = {coffee.id} />  
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  CoffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;
