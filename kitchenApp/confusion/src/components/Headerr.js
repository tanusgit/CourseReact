import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar dark color="primary">
            <div className="container">
          <NavbarBrand href="/">
          Ristorente Con Fusion asdfasfasdf
          </NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
      <div className="container">
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h1>Ristorente con Fusion</h1>
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