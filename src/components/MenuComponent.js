import React from 'react'
import { Card, CardImgOverlay, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Menu = (props) => {
    const menu = props.dishes.map( 
        dish => <div className="col-12 m-1 col-md-5" key={dish.id} >
                    <Card>
                        <Link to={`/menu/${dish.id}`} >
                            <CardImg src={dish.image} alt={dish.name} width="100%" />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
    );
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home" >Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                { menu }
            </div>
        </div>
    );    
}

export default Menu;