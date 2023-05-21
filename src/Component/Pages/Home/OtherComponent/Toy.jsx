import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaShoppingCart, FaShareAlt,FaRegStar,FaStar,FaEye } from "react-icons/fa";


const Toy = () => {
  const toy = useLoaderData();
  return (
    <div className="mx-24 my-10">
      <div className="card card-side bg-base-100 shadow-xl border border-x-amber-200">
        <figure className="w-1/2">
        <img className="border-1 w-full h-full p-10" src={toy?.picture_url} alt="" />
        </figure>
        <div className="card-body w-1/2 pt-32">
          <h2 className="card-title text-5xl">{toy?.name}</h2>
          <h2 className="card-title text-3xl">Price : ${toy?.price}</h2>
          <h2 className="card-title text-2xl"> Available Quantity: {toy?.quantity}</h2>
          <p>Details: {toy?.detail_description}</p>
          <Rating
          className="text-yellow-500"
            placeholderRating={toy?.rating}
            readonly
            emptySymbol={
                <FaRegStar></FaRegStar>
            }
            placeholderSymbol={
                <FaStar></FaStar>
            }
            fullSymbol={
                <FaStar></FaStar>
            }
          /> 
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><FaShoppingCart></FaShoppingCart>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
