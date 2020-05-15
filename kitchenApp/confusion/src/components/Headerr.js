import React, {Component} from 'react';
import {Navbar, NavbarBrand,Form, Input, Button, Label, FormGroup, Nav, Modal, ModalHeader, ModalBody, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{

  constructor(props){
    super(props);
    this.state ={
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event){
    this.toggleModal();
    alert("username: " + this.username.value+ " Password: " + this.password.value
    + "Remember: "+ this.remember.checked);
    event.preventDefault();
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
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg">Login</span>
              </Button>
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
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username"
              innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password"
              innerRef={(input) => this.password = input}/>
            </FormGroup>
            <FormGroup check>
              <Label ckeck>
                <Input type="checkbox" name="remember"
                innerRef={(input) => this.remember = input}/>
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" valu="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
            </React.Fragment>
        );
    }
}
export default Header;