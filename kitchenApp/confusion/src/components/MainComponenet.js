import React, {Component} from 'react';
import Home from './home';
import { COMMENTS } from './comments';
import { PROMOTIONS } from './promotions';
import { LEADERS } from './leader';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import {DISHESLIST} from '../shared/dishes';
//import DishDetails from './components/DishDetails';
import Header from './Headerr';
import Footer from './footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './contact';
class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      ConfusionDishes: DISHESLIST,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  render(){
    const Homepage = () =>{
      return(
        <Home 
        dish={this.state.ConfusionDishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.ConfusionDishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


  return (
    <div>
     <Header />
     <Switch>
     
      <Route path="/home" component={Homepage}/>
      <Route exact path = "/menu" component={()=><Menu dishes = {this.state.ConfusionDishes}/>}/>
      <Route path='/menu/:dishId' component={DishWithId} />
      <Route exact path='/contactus' component={Contact} />} />
      <Redirect to="/home" />
     </Switch>
      {/*<Menu dishes={this.state.ConfusionDishes}/>*/}
      <Footer />
      {/*<DishDetails dishes={this.state.ConfusionDishes}></DishDetails>*/}
    </div>
  );
}
}

export default Main;
