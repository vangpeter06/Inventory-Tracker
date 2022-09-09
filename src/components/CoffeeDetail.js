import React from "react";
import PropTypes from "prop-types"

function CoffeeDetail(props) {
  const { coffee } = props;

    function handleSellingPound(event) {
      event.preventDefault();
      if(coffee.quantity === 1 || coffee.quantity === 0) {
        props.onClickingSell({name: coffee.name, price: coffee.price, origin: coffee.origin, roast: coffee.roast, quantity: 0, id: coffee.id});
        alert ("SOLD OUT!");
      } else {
        props.onClickingSell({name: coffee.name, price: coffee.price, origin: coffee.origin, roast: coffee.roast, quantity: coffee.quantity -1, id: coffee.id});
      }
    }
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - Price: ${coffee.price}</h3>
      <p><em>{coffee.origin} - {coffee.roast}</em></p>
      <h4>Quantity Remaining(IBS):{coffee.quantity}</h4>
      <hr/>
      <button onClick = {handleSellingPound}>Sell Pound</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingSell: PropTypes.func
};

export default CoffeeDetail;