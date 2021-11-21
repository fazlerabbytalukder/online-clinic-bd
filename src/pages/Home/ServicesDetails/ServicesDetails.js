import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const { detailsid } = useParams();
    const [details, setDetails] = useState([]);
    const { serviceName, img, description } = details;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/hot-onion-ecommerce/main/public/servicedb.json')
            .then(res => res.json())
            .then(data => {
                setDetails(data.find((service) => service.id === parseInt(detailsid)))
            });
    }, [detailsid]);

    return (
        <div>


            <Container>
                <Row className="justify-content-md-center mx-auto mt-5 w-50">
                    <Col xs lg="4">
                    </Col>
                    <Col md="auto">
                        <Card className='shadow h-100 service-card'>
                            <Card.Img className='mx-auto service-img p-2' variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className='text-center'>{serviceName}</Card.Title>
                                <Card.Text>
                                    <p>{description}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="4">
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesDetails;