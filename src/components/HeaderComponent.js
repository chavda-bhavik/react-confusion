import React, { Component } from 'react'

import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'

class header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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