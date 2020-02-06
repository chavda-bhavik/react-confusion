import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

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
        if(props.comments) {
            comments = props.comments.map( (comment) => (
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
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home" >Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu" >Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { renderDish() }
                    </div>
                    <div className="col-12 col-md-5 m-1 text-left">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            { renderComments() }
                        </ul>
                        <Button outline onClick={props.toggleCommentModal}>
                            <span class="fa fa-pencil fa-lg"></span> {' '} Submit Comment
                        </Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default DishDetails