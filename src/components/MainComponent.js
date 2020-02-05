import React, { Component } from 'react';

import About from './AboutComponent'
import DishDetail from './DishDetailsComponent'
import Contact from './ContactComponent'
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    state = {
        selectedDish: null
    }
    render() {
        const dishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish={this.props.dishes.filter( dish => dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments={this.props.comments.filter( comment => comment.dishId === parseInt(match.params.dishId, 10))}
                />

            )
        }
        const HomePage = () => {
            return <Home 
                dish={this.props.dishes.filter( dish => dish.featured === true )[0]} 
                promotion={this.props.promotions.filter( promo => promo.featured === true)[0]} 
                leader={this.props.leaders.filter( leader => leader.featured===true)[0]} 
            />
        }
        const AboutUS = () => {
            return <About leaders={this.props.leaders} />
        }
        return (
        <div className="App">
            <Header />
                <Switch>
                    <Route path="/aboutus" render={AboutUS} />
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={dishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
