import React from 'react'; 
import Herocontent from './Herocontent';
import Animation from './Animation';


const Hero = () => {
    return (
        <div className='relative'>
            <div>
                <Herocontent></Herocontent>
            </div> 
            {/* <div className='absolute overflow-hidden'>
                <Animation ></Animation>
            </div> */}
        </div>
    );
};

export default Hero;