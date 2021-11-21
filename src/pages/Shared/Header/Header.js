import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='navber'>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home" className='fw-bold'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/services" className='fw-bold'>
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/specialists" className='fw-bold'>
                                Specialists
                            </Nav.Link>
                            <Nav.Link as={Link} to="/appointments" className='fw-bold'>
                                Appointments
                            </Nav.Link>
                            {
                                user?.email ? <><Nav.Link as={Link} to="/home" onClick={logOut} className="btn btn-light rounded-pill px-4 border me-2 ms-2">
                                    Logout
                                </Nav.Link>
                                <Nav.Link as={Link} to="/home" className="btn btn-light rounded-pill px-4 border me-2 ms-2">
                                    {user?.displayName}
                                    </Nav.Link>
                                </>
                                    :
                                    <>
                                    <Nav.Link as={Link} to="/login" className="btn btn-light rounded-pill px-4 border me-2 ms-2">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register" className="btn btn-primary rounded-pill text-light px-4">
                                        Sign up
                                    </Nav.Link>
                                    </>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;