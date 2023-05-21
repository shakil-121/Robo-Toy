import React from 'react';
import Hero from './Hero';
import AllBrands from './AllBrands';
import Gallery from './Gallery';
import usetitle from '../../DaynamicTitle/usetitle';
import ShopByCategory from './ShopByCategory';

const Home = () => { 
    usetitle('Home')
    return (
        <div>
           <Hero></Hero>
           <AllBrands></AllBrands>
           <Gallery></Gallery> 
           <ShopByCategory></ShopByCategory> 
        </div>
    );
};

export default Home;