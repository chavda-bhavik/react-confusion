import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap'
import { DISHES } from './../shared/dishes'
import DishDetails from './DishDetailsComponent'
import Menu from './MenuComponent'

class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }
    onDishSelect = (dish) => { 
        this.setState({ selectedDish: dish })
    }  
    render() {
        return (
        <div className="App">
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <div className="container">
                <Menu 
                    dishes={this.state.dishes}
                    clicked={this.onDishSelect}
                />
                <DishDetails dish={this.state.selectedDish} />
            </div>
        </div>
        );
    }
}

export default Main;
