import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctorsdb.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className='container'>
            <div>
                <p className='doctor-sub-heading'>Meet Our Professionals</p>
                <h1 className='doctors-heading'>Top Rated Specialists</h1>
                <p className='doctor-heading-details'>There are many types of doctors, but there are two main categories: primary care or specialty care. Within these two groups, doctors vary widely in their specialty area and level of training.This article looks at the different types of doctor, their roles, the conditions they treat, and the procedures they can perform.</p>
            </div>
            <Row xs={1} md={4} className="g-3">
            {
                doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
            </Row>
        </div>
    );
};

export default Doctors;