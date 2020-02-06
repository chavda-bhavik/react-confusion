import React, { Component } from 'react'

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input  } from 'reactstrap'
import { Link } from 'react-router-dom'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class header extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    state={
        isOpen: false,
        isModalOpen: false
    }
    toggleNav = () => {
        this.setState((state, props) => {
            return { isOpen: !state.isOpen }
        })
    }
    toggleModal = () => {
        this.setState((state,pros) => {
            return {isModalOpen: !state.isModalOpen}
        })
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username:"+this.username.value+" Password:"+this.password.value+" Remember: "+this.remember.checked);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={() => this.toggleNav()} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="public/assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isOpen} >
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link" exact="true" to="/home"><span className="fa fa-home fa-lg"></span>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" exact="true" to="/aboutus"><span className="fa fa-info fa-lg"></span>About Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" exact="true" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" exact="true" to="/contactus"><span className="fa fa-address-card fa-lg"></span>Contact Us</Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"> Login</span>
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
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisiones, and create a unique fusion experience. Out lipsmacking creation will tickle your culiary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={ (input) => this.username = input } />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={ (input) => this.password = input } />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={ (input) => this.remember = input } />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
export default header