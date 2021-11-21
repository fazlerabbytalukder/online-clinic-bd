import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './doctor.css';

const Doctor = (props) => {
    const { id, serviceName, img, name, degree } = props.doctor;
    const history = useHistory();

    const handleDoctorDetailsClick = () => {
        history.push(`/doctordetails/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className='shadow h-100 service-card'>
                    <Card.Img className='mx-auto doctor-img shadow p-2' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center mb-4'><i className="fas fa-user-check doctor-name-icon"></i> {name}</Card.Title>
                        <Card.Text>
                            <p><i class="fas fa-caret-right"></i> {serviceName}</p>
                            <p><i class="fas fa-caret-right"></i> {degree}</p>
                            <button onClick={handleDoctorDetailsClick} className='btn btn-secondary w-100'>Details</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;