import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import img1 from "../../../assets/gallery/1.jpg";
import img2 from "../../../assets/gallery/2.jpg";
import img3 from "../../../assets/gallery/3.jpg";
import img4 from "../../../assets/gallery/4.jpg";
import img5 from "../../../assets/gallery/5.jpg";
import img6 from "../../../assets/gallery/6.jpg";
import img7 from "../../../assets/gallery/7.jpg";
import img8 from "../../../assets/gallery/8.jpg";
import img9 from "../../../assets/gallery/9.jpg";
import img10 from "../../../assets/gallery/10.jpg";

// import { Grid, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div className="bg-[#01021f] py-10  rounded-xl">
      <div>
        <h1 className="text-5xl text-white text-center font-semibold my-10">
          Gallery
        </h1>
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000" className="grid md:grid-cols-3 gap-4 md:ms-24 justify-center">
        <img
          className="w-72 h-64 rounded-xl hover:shadow-[0px_20px_60px_0px_#e53e3e]"
          src={img1}
          alt=""
        />
        <img
          className="w-72 h-64 rounded-xl hover:shadow-[0px_20px_60px_0px_#e53e3e]"
          src={img2}
          alt=""
        />
        <img
          className="w-72 h-64 rounded-xl hover:shadow-[0px_20px_60px_0px_#e53e3e]"
          src={img3}
          alt=""
        />
        <img
          className="w-72 h-64 rounded-xl hover:shadow-[0px_20px_60px_0px_#e53e3e]"
          src={img4}
          alt=""
        />
        <img
          className="w-72 h-64 rounded-xl hover:shadow-[0px_20px_60px_0px_#e53e3e]"
          src={img5}
          alt=""
        />
        <img
          className="w-72 h-64 rounded-xl hover:shadow-[0px_20px_60px_0px_#e53e3e]"
          src={img10}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;

{
  /* <Swiper
slidesPerView={3}
grid={{
  rows: 2,
}}
spaceBetween={30}
pagination={{
  clickable: true,
}}
modules={[Grid, Pagination]}
className="mySwiper"
>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
</Swiper> */
}
