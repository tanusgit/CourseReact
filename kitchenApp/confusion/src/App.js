import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHESLIST} from './shared/dishes';
import Main from './components/MainComponenet';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      ConfusionDishes: DISHESLIST
    };
  }
  render(){
  return (
    <BrowserRouter>
    <div>
      {/*<Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
          Ristorente Con Fusion
          </NavbarBrand>
        </div>
  </Navbar>*/}
    <Main />
     {/* <Menu dishes={this.state.ConfusionDishes}/>*/}
      {/*<DishDetails dishes={this.state.ConfusionDishes}></DishDetails>*/}
    </div>
    </BrowserRouter>
  );
}
}

export default App;
