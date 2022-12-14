import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewCoffeeForm(props) {
  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      price: parseInt(event.target.price.value),
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
      <input
      type = 'text'
      name = 'name'
      placeholder="Coffee Name"/>
      <input
      type = 'text'
      name = 'price'
      placeholder="Price of Coffee"/>
      <input
      type = 'text'
      name = 'origin'
      placeholder="Type of origin"/>
      <input
      type = 'text'
      name = 'roast'
      placeholder="Type of Roast"/>
      <input 
      type = "text"
      name="quantity"
      placeholder="Enter the amount of Coffee" />
      <button type="submit">Add Coffee</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;