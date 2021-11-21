import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const { id, serviceName, img, description } = props.service;
    const history = useHistory();

    const handleDetailsClick = () => {
        history.push(`/details/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className='shadow h-100 service-card'>
                    <Card.Img className='mx-auto service-img p-2' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'>{serviceName}</Card.Title>
                        <Card.Text>
                            <p>{description.slice(0, 120)}</p>
                            <button onClick={handleDetailsClick} className='btn btn-secondary rounded w-100'>Details</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;