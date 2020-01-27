import React, { Component } from 'react';
import { DISHES } from './../shared/dishes'
import DishDetails from './DishDetailsComponent'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }
    render() {
        const HomePage = () => {
            return <Home />
        }
        return (
        <div className="App">
            <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default Main;
