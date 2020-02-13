import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Loading from './LoadingComponent'
import { baseURL } from "../shared/baseURL";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />
    }
    else if(errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else {
        if(item) {
            return (
                <Card>
                    <CardImg src={baseURL + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        { item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return <Loading />
        }
    }
}

const home = (props) => {
    console.log(props.promotion)
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.dish} 
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.promotion[0]} 
                        isLoading={props.promosLoading} 
                        errMess={props.promosErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    )
}
export default home