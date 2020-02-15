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
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from "./../redux/ActionCreaters";
import { actions } from 'react-redux-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fechDishes: () => {dispatch(fetchDishes())},    
    fechPromos: () => {dispatch(fetchPromos())},
    fechComments: () => {dispatch(fetchComments())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    resetFeedbackForm: () => { dispatch( actions.reset('feedback') )}
})

class Main extends Component {
    componentDidMount() {
        this.props.fechDishes();
        this.props.fechComments();
        this.props.fechPromos();
        this.props.fetchLeaders();
    }
    render() {
        const dishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish={this.props.dishes.dishes.filter( dish => dish.id === parseInt(match.params.dishId,10))[0]} 
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter( comment => comment.dishId === parseInt(match.params.dishId))}
                    commentsErrMess={this.props.comments.errMess}
                    dishId={match.params.dishId}
                    postComment={this.props.postComment}
                />
            )
        }
        const HomePage = () => {
            return <Home 
                dish={this.props.dishes.dishes.filter( dish => dish.featured === true )[0]} 
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                //promotion={this.props.promotions.promotions.filter( promo => promo.featured === true)[0]} 
                promotion={this.props.promotions.promotions} 
                promosLoading={this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}                
                leader={this.props.leaders.leaders[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.error}
            />
        }
        const AboutUS = () => {
            return <About leaders={this.props.leaders.leaders} />
        }
        return (
        <div className="App">
            <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/aboutus" render={AboutUS} />
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />} />
                            <Route path="/menu/:dishId" component={dishWithId} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            <Footer />
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
