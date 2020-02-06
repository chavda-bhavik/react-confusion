import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Row, Col,  Modal, ModalHeader, ModalBody, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetails extends React.Component {
    state = {
        showModal:false
    }
    renderDish = () => {
        return (
            <Card>
                <CardImg src={this.props.dish.image} alt={this.props.dish.name} width="100%" />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    renderComments = () => {
        let comments = null
        if(this.props.comments) {
            comments = this.props.comments.map( (comment) => (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, { new Intl.DateTimeFormat('en-US',{ year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date))) } </p>
                </li>
            ))
        }
        return comments
    }
    toggleModal = () => {
        this.setState( (state,props) => {
            return { showModal: !state.showModal}
        } )
    }
    handleCommentSubmit = (values) => {
        alert("Comment values are:" + JSON.stringify(values));
        console.log("Comment values are:" + JSON.stringify(values));
    }
    render() {
        if(this.props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home" >Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu" >Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            { this.renderDish() }
                        </div>
                        <div className="col-12 col-md-5 m-1 text-left">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                { this.renderComments() }
                            </ul>
                            <Button outline onClick={this.toggleModal}>
                                <span class="fa fa-pencil fa-lg"></span> {' '} Submit Comment
                            </Button>
                        </div>
                    </div>
                    
                    <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select
                                            model=".rating"
                                            className="form-control" 
                                            name="rating"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name" md={12}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text 
                                            model=".name" 
                                            id="name" 
                                            name="name" 
                                            placeholder="Your name" 
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Your name is Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea 
                                            model=".comment"
                                            id="message" 
                                            name="message" 
                                            placeholder="Your Comment" 
                                            rows="6"
                                            className="form-control"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".comment"
                                            show="touched"
                                            messages={{ required: 'Comment is Required ' }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default DishDetails