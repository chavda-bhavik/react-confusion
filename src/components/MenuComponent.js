import React, { Component } from 'react'
import { Media, Card, CardImgOverlay, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    state = {
        selectedDish: null
    }
    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish })
    }
    renderDish = (dish) => {
        if(dish !== null) {
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} width="100%" />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return null
        }
    }
    render() {
        const menu = this.props.dishes.map( 
            dish => <div className="col-12 m-1 col-md-5">
                        <Card 
                            key={dish.id} 
                            onClick={() => this.onDishSelect(dish)}
                        >
                            <CardImg src={dish.image} alt={dish.name} width="100%" />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
        );
        return (
            <div className="container">
                <div className="row">
                    { menu }
                </div>
                <div className="row">
                    { this.renderDish(this.state.selectedDish) }
                </div>
            </div>
        );
    }
}

export default Menu;