import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/brand-logo/logo1.jpg'
import logo2 from '../../../assets/brand-logo/logo2.png'
import logo3 from '../../../assets/brand-logo/logo3.jpeg'
import logo4 from '../../../assets/brand-logo/logo4.jpeg'
import logo5 from '../../../assets/brand-logo/logo5.png'
import logo6 from '../../../assets/brand-logo/logo6.png'
import logo7 from '../../../assets/brand-logo/logo7.jpg'

const AllBrands = () => {
  return (
    <div className="my-28"> 
        <div>
            <h1 className="text-4xl font-bold text-center mb-16">All Brands</h1>
        </div>
      <Marquee>
        <img className="h-36 w-40"  src={logo1} alt="" />
        <img className="h-36 w-40 mx-10"  src={logo2} alt="" />
        <img  className="h-36 w-40" src={logo3} alt="" />
        <img className="h-36 w-40 mx-10"  src={logo4} alt="" />
        <img className="h-36 w-40"  src={logo5} alt="" />
        <img className="h-36 w-40 mx-10"  src={logo6} alt="" />
        <img className="h-36 w-40 mx-10"  src={logo2} alt="" />
        <img className="h-36 w-40"  src={logo7} alt="" />
        <img className="h-36 w-40 mx-10"  src={logo3} alt="" />
        <img className="h-36 w-40"  src={logo4} alt="" />
      </Marquee>
    </div>
  );
};

export default AllBrands;
