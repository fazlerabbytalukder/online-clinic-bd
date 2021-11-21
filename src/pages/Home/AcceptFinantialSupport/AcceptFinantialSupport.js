import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AcceptFinantialSupport = () => {
    return (
        <div>
            <Modal.Dialog className='shadow'>
                <Modal.Body>
                    <div className='text-center py-5'>
                        <h2>Awesome!!!!!!!</h2>
                        <p>Congrats. You Accept our terms and condition and fond a good amount of discount.</p>
                        <Link to='/' className='btn btn-secondary w-25'>ok</Link>
                    </div>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
};

export default AcceptFinantialSupport;