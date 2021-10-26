import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import { Button, Col, Container, Row } from 'react-bootstrap';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }

    return (

        <Container>
            <Row>
                <Col md={9} className="mt-3">
                    <Row xs={1} >
                        {
                            cart.map(product => <ReviewItem
                                key={product.key}
                                product={product}
                                handleRemove={handleRemove}
                            ></ReviewItem>)
                        }
                    </Row>
                </Col>
                <Col md={3}>
                    <Cart cart={cart}>

                        <Button variant="success" onClick={handleProceedToShipping}>Shipping</Button>
                    </Cart>
                </Col>
            </Row>
        </Container>


    );
};

export default OrderReview;