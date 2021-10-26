import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import { Button, Card, Col } from 'react-bootstrap';

const Product = (props) => {

    const { name, img, seller, price, stock, star } = props.product;

    return (

        <Col>
            <Card className="product-shadow">
                <Card.Img variant="top" src={img} className="p-4" />
                <Card.Body>
                    <Card.Title className="product-name ">{name.slice(0, 35)}</Card.Title>
                    <Card.Text>

                        <p className="text-muted text-center mb-1">by: <span className="text-success">{seller}</span> & <span className="text-success">{stock}</span> left in stock</p>

                        <p className="text-center mb-1">     <Rating
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating></p>
                        <hr />



                        <p className="text-center fs-4 text-danger mb-2">{price} $</p>
                        <p className="mb-0"><Button variant="outline-primary" className="custom-button"
                            onClick={() => props.handleAddToCart(props.product)}
                        ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</Button></p>




                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Product;