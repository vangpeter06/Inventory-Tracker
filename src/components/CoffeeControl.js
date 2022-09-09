import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false 
    });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleSellSelectedCoffee = (coffeeToSell) => {
    const changedPoundsRemaining = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id).concat(coffeeToSell);
    this.setState({
      mainCoffeeList: changedPoundsRemaining,
      selectedCoffee: coffeeToSell
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} 
      onClickingSell = {this.handleSellSelectedCoffee} />
      buttonText = "Return to coffee list";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation = {this.handleAddingNewCoffeeToList} />
      buttonText = "Return to coffee list";
    } else {
      currentlyVisibleState = <CoffeeList coffeeList = {this.state.mainCoffeeList}
      onCoffeeSelection = {this.handleChangingSelectedCoffee} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;