import React from 'react';
import doctorimg from '../../../images/banner/doctor.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-6">
                        <img className='img-fluid w-75 mx-auto ms-5 rounded' src={doctorimg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>This is a online based clinic whare you an appointment a doctor. A proper consultation will be provided by the doctor as the confirmed time slot will be reserved for the patient and no other patient will be attended to during that time. Basis the reports shared, the doctor can suggest the next steps including other tests which are required for proper diagnosis of patient's condition. In case of a surgery or treatment recommendation made by the doctor, the patient must visit the doctor before actually opting for that surgery or treatment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;