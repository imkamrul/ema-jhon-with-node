import React from 'react';
import { Col, Button, Row, Image } from 'react-bootstrap';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, price, quantity, key, img } = props.product;
    console.log(img)
    const { handleRemove } = props;
    return (


        <Col xs={12} >
            <Row className="my-1 p-2 review-item-shadow">
                <Col md={2} >
                    <Image src={img} roundedCircle fluid />
                </Col>
                <Col md={10} >
                    <h4 className="fs-4 fw-light">{name}</h4>
                    <h6 className="fs-5 fw-light">Price : <span className="fs-5 fw-bold">{price}</span>  Quantity:<span className="fs-5 fw-bold"> {quantity}</span></h6>

                    <Button variant="danger" onClick={() => handleRemove(key)} >Remove</Button>
                </Col>
            </Row>
        </Col>


    );
};

export default ReviewItem;