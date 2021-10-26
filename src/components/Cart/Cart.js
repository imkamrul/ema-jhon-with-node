import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (


        <Row>
            <Col md={12} className="mt-3">
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Header>Order Summary</Card.Header>
                    <Card.Body>
                        <Card.Title>Items Ordered: {totalQuantity}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Total: {total.toFixed(2)}</ListGroup.Item>
                            <ListGroup.Item>Shipping: {shipping}</ListGroup.Item>
                            <ListGroup.Item>tax: {tax.toFixed(2)}</ListGroup.Item>

                            <ListGroup.Item>Grand Total: {grandTotal.toFixed(2)}</ListGroup.Item>
                            <div className="text-center pt-3">
                                {props.children}
                            </div>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>



    );
};

export default Cart;