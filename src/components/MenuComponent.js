import React from 'react'
import { Card, CardImgOverlay, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import Loading from './LoadingComponent'
import { baseURL } from "../shared/baseURL";

const Menu = (props) => {
    const menu = props.dishes.dishes.map( 
        dish => <div className="col-12 m-1 col-md-5" key={dish.id} >
                    <Card>
                        <Link to={`/menu/${dish.id}`} >
                            <CardImg src={ baseURL + dish.image} alt={dish.name} width="100%" />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
    );
    if(props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    } else if(props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    } else {
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
}

export default Menu;