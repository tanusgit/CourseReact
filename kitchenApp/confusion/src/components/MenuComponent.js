import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
           selectedDish: null
        };
    }

    
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }
    renderDish({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    render(){
         const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-md-3 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                       
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay body className="ml-1">
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
        
    }
}
export default Menu;