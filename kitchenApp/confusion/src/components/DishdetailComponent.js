import React, {Component} from 'react';
import {DISHESLIST} from '../shared/dishes';
import {Card, CardTitle, CardText, CardBody, CardImg, CardImgOverlay} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Menu from './MenuComponent';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            singledish: null
        };
    }

    RenderDish(dish){
            return (            
                   <div className="col-12 col-md-5 m-1">
                    <Card>
                   <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
                </div>
            );
    }

    RenderComments(dish){
        return (            
            <div className="col-12 col-md-5 m-1">
             <Card>
         <CardBody>
             <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.comments}</CardText>
         </CardBody>
         </Card>
         </div>
     );
    }

    render(){
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <this.RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <this.RenderComments comments={this.props.comments} />
                </div>
            </div>
            </div>
        );
    }
        
}      
    

export default DishDetail;
