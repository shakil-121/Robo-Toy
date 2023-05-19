import React from 'react';
import Hero from './Hero';
import AllBrands from './AllBrands';
import Gallery from './Gallery';
import usetitle from '../../DaynamicTitle/usetitle';

const Home = () => { 
    usetitle('Home')
    return (
        <div>
           <Hero></Hero>
           <AllBrands></AllBrands>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;