import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppointmentSuccessful = () => {
    return (
        <div>
            <Modal.Dialog className='shadow'>
                <Modal.Body>
                    <div className='text-center py-5'>
                        <h2>Awesome!!!!!!!</h2>
                        <p>Congrats. You Successflly Appoint a doctor.</p>
                        <Link to='/' className='btn btn-secondary w-25'>ok</Link>
                    </div>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
};

export default AppointmentSuccessful;