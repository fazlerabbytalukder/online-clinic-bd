import React from 'react';
import specialOneImg from '../../../images/quality/24 hour service.png';
import specialTwoImg from '../../../images/quality/Appointment.png';
import specialThreeImg from '../../../images/quality/emergency.png';

const OurSpecialQality = () => {
    return (
        <div className='container g-4'>
            <div className='text-center mt-5 mb-4'><h2>Our Special Quality</h2></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card shadow">
                        <img src={specialOneImg} className="card-img-top w-25 mx-auto mt-4" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title text-center">On Time Response</h5>
                        <p class ="card-text text-center">We response our user on time response. Any time yo need us we are here for you.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <img src={specialTwoImg} className="card-img-top w-25 mx-auto mt-4" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title text-center">Specialist Doctor</h5>
                        <p class ="card-text text-center">If you need any special type of problem you search special catagory doctor.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <img src={specialThreeImg} className="card-img-top w-25 mx-auto mt-4" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title text-center">Emergency Support</h5>
                        <p class ="card-text text-center">If you need any emergency service we are here for you to spport.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialQality;