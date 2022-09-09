import React from "react";
import PropTypes from "prop-types";

function Coffee (props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - ${props.price}</h3>
        <p><em>{props.origin} - {props.roast}</em></p>
        <h4>Quantity-{props.quantity}</h4>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;