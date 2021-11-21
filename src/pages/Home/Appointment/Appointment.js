import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Appointment.css';

const Appointment = (props) => {
    const { title, img, description } = props.appointment;
    return (
        <div>
            <Col>
                <Card className='shadow h-100'>
                    <Card.Img className='mx-auto w-25 mt-3' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center title'>{title}</Card.Title>
                        <Card.Text>
                            <p className='text-center'>{description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Appointment;