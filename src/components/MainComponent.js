import React, { Component } from 'react';
import { DISHES } from './../shared/dishes'
import DishDetails from './DishDetailsComponent'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

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
            <Header />
            <div className="container">
                <Menu 
                    dishes={this.state.dishes}
                    clicked={this.onDishSelect}
                />
                <DishDetails dish={this.state.selectedDish} />
            </div>
            <Footer />
        </div>
        );
    }
}

export default Main;
