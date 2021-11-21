import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Appointment from '../Appointment/Appointment';
import './Appointments.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('./appointmentbd.json')
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [])
    return (
        <div className='container appointment'>
            <div>
                <h1 className='appointment-heading mt-5'>DISCOVER THE ONLINE APPOINTMENT!</h1>
                <p className='appointment-details text-center'>Health care services are a discipline account. Medical centers give you expert and quality healthcare with all the benefits of exemplary clinical expertise in medical technology.</p>
            </div>
            <Row xs={1} md={3} className="g-3">
            {
                appointments.map(appointment => <Appointment key={appointment.id} appointment={appointment}></Appointment>)
            }
            </Row>
            <div className='special-section'>
                <p className=' text-center'>You You Have Any Finantial issue please <Link to='/finantialissue'>Click Here</Link></p>
            </div>
        </div>
    );
};

export default Appointments;