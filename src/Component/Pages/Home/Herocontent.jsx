import React from 'react';
import Lottie from "lottie-react";
import Animation from "../../../assets/35787-robot-says-hello.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Herocontent = () => {
    return (
        <div className='bg-[#01021f] p-10 md:px-20 md:flex items-center justify-center w-full h-screen '>
            <div className='md:w-1/2' data-aos="fade-right" data-aos-duration="3000" >
                <h1 className='text-5xl text-white font-bold'>Baby <span className='text-amber-400'>Robot Toy</span></h1>
                <h1 className='text-5xl text-white py-2 font-bold'>For Your Child Gift</h1> 
                <p className='text-white pt-6'>This is a Largest Robot Toy Selling Online Platform in the World . You Will Choice any kind of robot toy for your child.This is very helpfull for growing your children knowledge</p>
                <button className='mt-10 btn bg-white text-black border-none font-bold px-12'>All Toys</button>
                </div> 
            <div className='md:w-1/2' data-aos="fade-left" data-aos-duration="3000" >
            <Lottie  className='md:ms-10' animationData={Animation} loop={true} />
            </div>
        </div>
    );
};

export default Herocontent;