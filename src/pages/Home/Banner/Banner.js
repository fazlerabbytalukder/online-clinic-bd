import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import banner from '../../../images/banner/banner-img.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col><img className='img-fluid mt-3' width="360" height="360" src={banner} alt="" /></Col>
                    <Col>
                        <h2 className='sub-heading mt-3'>Emergency?</h2>
                        <h1 className='heading'>Find Doctor Here</h1>
                        <h5 className='slogan mb-4'>Any time, Any where</h5>
                        <InputGroup className="mb-3 w-50">
                            <FormControl
                                placeholder="Search Doctor Name"
                                aria-label="Search Doctor Name"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">Find</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;