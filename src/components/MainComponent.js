import React, { Component } from 'react';

import { DISHES } from './../shared/dishes'
import { COMMENTS } from './../shared/comments'
import { LEADERS } from './../shared/leaders'
import { PROMOTIONS } from './../shared/promotions'

import About from './AboutComponent'
import DishDetail from './DishDetailsComponent'
import Contact from './ContactComponent'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        selectedDish: null
    }
    render() {
        const dishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish={this.state.dishes.filter( dish => dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments={this.state.comments.filter( comment => comment.dishId === parseInt(match.params.dishId, 10))}
                />

            )
        }
        const HomePage = () => {
            return <Home dish={this.state.dishes.filter( dish => dish.featured === true )[0]} promotion={this.state.promotions.filter( promo => promo.featured === true)[0]} leader={this.state.leaders.filter( leader => leader.featured===true)[0]} />
        }
        const AboutUS = () => {
            return <About leaders={this.state.leaders} />
        }
        return (
        <div className="App">
            <Header />
                <Switch>
                    <Route path="/aboutus" render={AboutUS} />
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={dishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default Main;
