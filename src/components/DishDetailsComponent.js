import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

const DishDetails = (props) => {
    const renderDish = () => {
        return (
            <Card>
                <CardImg src={props.dish.image} alt={props.dish.name} width="100%" />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    const renderComments = () => {
        let comments = null
        if(props.dish.comments) {
            comments = props.dish.comments.map( (comment) => (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, { new Intl.DateTimeFormat('en-US',{ year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date))) } </p>
                </li>
            ))
        }
        return comments
    }
    if(props.dish) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    { renderDish() }
                </div>
                <div className="col-12 col-md-5 m-1 text-left">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { renderComments() }
                    </ul>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default DishDetails