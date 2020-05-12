import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{

  constructor(props){
    super(props);
    this.state ={
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

    render(){
        return(
            <React.Fragment>
            <Navbar dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand className="mr-auto" href="/">
          <img src="assets/images/logo.png" height="30" width="41" alt="ristorente con fusion"/>
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar>
            <NavItem id ="g">
              <NavLink classname="nav-link" to="/home">
              <span id = "gap" className="fa fa-home fa-lg"> Home</span>
                
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink classname="nav-link" to="/aboutus">
                <span id = "gap" className="fa fa-info fa-lg"> About us</span>
                
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink classname="nav-link" to="/menu">
                <span id = "gap" className="fa fa-list fa-lg"> Menu</span>
               
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink classname="nav-link" to="/contactus">
                <span id = "gap" className="fa fa-address-card fa-lg"> contact us</span>
                
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
      <div className="container">
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h4>Ristorente con Fusion</h4>
            <p>
              this is my restaurant. i love my restaurant.
            </p>
          </div>
        </div>
        </div>
      </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;