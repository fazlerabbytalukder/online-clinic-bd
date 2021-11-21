import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DoctorDetails = () => {
    const { doctorid } = useParams();
    const [doctorDetails, setDoctorDetails] = useState([]);
    const { serviceName, img, name, degree, location, available } = doctorDetails;


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/hot-onion-ecommerce/main/public/doctorsdb.json')
            .then(res => res.json())
            .then(data => {
                setDoctorDetails(data.find((service) => service.id === parseInt(doctorid)))
            });
    }, [doctorid]);

    
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center mx-auto mt-5 w-50">
                    <Col md="auto">
                        <Card className='shadow h-100 service-card'>
                            <Card.Img className='mx-auto doctor-img shadow p-2' variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className='text-center mb-4'><i className="fas fa-user-check doctor-name-icon"></i> {name}</Card.Title>
                                <Card.Text>
                                    <p><i class="fas fa-caret-right"></i> {serviceName}</p>
                                    <p><i class="fas fa-caret-right"></i> {degree}</p>
                                    <p><i class="fas fa-caret-right"></i> {location}</p>
                                    <p><i class="fas fa-caret-right"></i> {available}</p>
                                    <Link className='btn btn-secondary' to='/appointmentsccessfull'>Appointment Now</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorDetails;