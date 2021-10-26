import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/shop">
                    <img
                        src={logo}
                        width="170"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 text-white nav-link">
                        <Nav.Link as={Link} to="/shop" className="text-dark">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/review" className="text-dark">Order Review</Nav.Link>

                        {user.email && <span style={{ color: 'blue', marginTop: "9px" }}>Hello {user.displayName} </span>}
                        {
                            user.email ?
                                <Button variant="warning" onClick={logOut} className="text-white ms-2">Log Out</Button>
                                // <button onClick={logOut}>log out</button>
                                :
                                <Nav.Link as={Link} to="/login"> <Button variant="secondary" >Log In</Button></Nav.Link>}




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;