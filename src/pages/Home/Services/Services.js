import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicedb.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <div>
                <h1 className='services-heading my-5'>Services</h1>
            </div>
            <Row xs={1} md={3} className="g-3">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;