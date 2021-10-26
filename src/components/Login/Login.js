import React from 'react';
import { Button, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-md-center py-5">
                <Col xs lg="4" className="text-start">
                    <Image src={logo} rounded fluid style={{ width: "50%" }} />
                    <div className="pt-3">

                        <InputGroup size="lg" className="mb-3">

                            <FormControl
                                placeholder="Email" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <InputGroup size="lg" className="mb-3">

                            <FormControl
                                placeholder="Password" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>

                        <div className="pt-3 d-flex justify-content-center ">

                            <Button variant="danger" className="fs-5">Log in</Button>

                        </div>
                        <div className="pt-3 d-flex justify-content-center">

                            <p className="pe-4  pt-2">Log in with google</p>
                            <p> <Button variant="outline-success" className="fs-5"
                                onClick={handleGoogleLogin}
                            > <i className="fab fa-google pe-3"></i>Google</Button></p>

                        </div>
                        <p className="text-center   sigin-text"><Link to="/register">Doesn't have an account ?</Link></p>



                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Login;