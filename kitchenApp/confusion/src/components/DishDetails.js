import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardBody, CardImg, CardImgOverlay} from 'reactstrap';

class DishDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            singledish: null
        };
    }
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderdishdetails(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardTitle> {dish.name}</CardTitle>
                    <CardBody>{dish.description}</CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
        <div>
            {this.renderdishdetails(this.state.singledish)}
        </div>
            );
    }
}
export default DishDetails;
