import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinantialIssue = () => {
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Finantial support Terms and Condition</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p><i class="fas fa-caret-right"></i> Eligibility criteria for financial assistance, and whether such assistance includes free or discounted care</p>
                    <p><i class="fas fa-caret-right"></i> The basis for calculating amounts charged to patients</p>
                    <p><i class="fas fa-caret-right"></i> The method for applying for financial assistance</p>
                    <p><i class="fas fa-caret-right"></i> For a hospital facility which does not have a separate billing and collections policy, the actions that may be taken in the event of nonpayment</p>
                    <p><i class="fas fa-caret-right"></i> If applicable, any information obtained from sources other than an individual seeking financial assistance that the hospital facility uses</p>
                    <p><i class="fas fa-caret-right"></i> a list of any providers, other than the hospital facility itself, delivering emergency or other medically necessary care in the hospital facility that specifies which providers are covered by the FAP and which are not.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to='/' className='btn btn-secondary'>Back To Home</Link>
                    <Link to='/acceptfinantialsupport' className='btn btn-primary'>Accept And Apply</Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default FinantialIssue;