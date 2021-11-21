import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Appointments from '../Appointments/Appointments';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import OurSpecialQality from '../OurSpecialQuality/OurSpecialQality';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurSpecialQality></OurSpecialQality>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;