import React from "react";
import PropTypes from "prop-types"

function CoffeeDetail(props) {
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - ${coffee.price}</h3>
      <p><em>{coffee.origin} - {coffee.roast}</em></p>
      <h4>Quantity-{coffee.quantity}</h4>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;