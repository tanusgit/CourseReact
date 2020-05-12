import React, {Component} from 'react';
import {DISHESLIST} from '../shared/dishes';
import {Card, CardTitle, CardText, CardBody, CardImg, CardImgOverlay} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            singledish: null
        };
    }
    render(){
        return(
            <div className="col-md-3 m-1">
                <div className="row">
                       
                    <p>Fasting is gaining popularity among biohackers looking for an edge,
                         but there’s remarkably little information on what happens inside 
                         the body during a fast. While some research has shown that caloric 
                         restriction can increase lifespans in lab animals, and plenty of
                          intermittent fasting enthusiasts swear it boosts their cognition 
                          and helps them lose weight, the molecular mechanisms have remained somewhat vague — limited mostly to 
                            the fat-burning phenomenon of ketosis. To start filling in this
                         knowledge gap, a small new stu</p>
                    
                   
                    </div>
                </div>
        );
    }
}
export default DishDetail;
