import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
           <Services></Services> 
           <Reviews></Reviews>
        </>
    );
};

export default Home;