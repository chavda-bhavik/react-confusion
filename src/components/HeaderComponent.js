import React, { Component } from 'react'

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'

class header extends Component {
    state={
        isOpen: false
    }
    toggleNav = () => {
        this.setState((state, props) => {
            return { isOpen: !state.isOpen }
        })
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
            </>
        )
    }
}
export default header