import React from 'react'
import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap';

const Menu = (props) => {
    const menu = props.dishes.map( 
        dish => <div className="col-12 m-1 col-md-5" key={dish.id} >
                    <Card 
                        onClick={() => props.clicked(dish)}
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
        </div>
    );    
}

export default Menu;