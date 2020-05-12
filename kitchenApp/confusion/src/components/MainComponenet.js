import React, {Component} from 'react';


import Menu from './MenuComponent';
import {DISHESLIST} from '../shared/dishes';
//import DishDetails from './components/DishDetails';
import Header from './Headerr';


class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      ConfusionDishes: DISHESLIST
    };
  }
  render(){
  return (
    <div>
     <Header />
      <Menu dishes={this.state.ConfusionDishes}/>
      {/*<DishDetails dishes={this.state.ConfusionDishes}></DishDetails>*/}
    </div>
  );
}
}

export default Main;
