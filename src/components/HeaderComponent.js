import React, { Component } from 'react'

import { Row, Col, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input  } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class header extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    state={
        isOpen: false,
        isModalOpen: false
    }
    handleCommentSubmit = (values) => {
        alert("Comment values are:" + JSON.stringify(values));
        console.log("Comment values are:" + JSON.stringify(values));
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
                
                <Modal isOpen={this.props.showCommentDialog} toggle={this.props.toggleCommentModal}>
                    <ModalHeader toggle={this.props.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                        model=".rating"
                                        className="form-control" 
                                        name="rating"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text 
                                        model=".name" 
                                        id="name" 
                                        name="name" 
                                        placeholder="Your name" 
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Your name is Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea 
                                        model=".comment"
                                        id="message" 
                                        name="message" 
                                        placeholder="Your Comment" 
                                        rows="6"
                                        className="form-control"
                                        validators={{ required }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{ required: 'Comment is Required ' }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
export default header