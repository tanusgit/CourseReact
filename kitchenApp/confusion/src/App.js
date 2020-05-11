import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHESLIST} from './shared/dishes';
import DishDetails from './components/DishDetails';



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      ConfusionDishes: DISHESLIST
    };
  }
  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
          Ristorente Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.ConfusionDishes}/>
      {/*<DishDetails dishes={this.state.ConfusionDishes}></DishDetails>*/}
    </div>
  );
}
}

export default App;
