import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaShoppingCart, FaShareAlt,FaRegStar,FaStar,FaEye } from "react-icons/fa";


const Toy = () => {
  const toy = useLoaderData();
  return (
    <div className="mx-24 my-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
        <img className="border-1 w-full h-60" src={toy?.picture_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy?.name}</h2>
          <h2 className="card-title">Price : ${toy?.price}</h2>
          <h2 className="card-title"> Available Quantity: {toy?.quantity}</h2>
          <p>Details: {toy?.detail_description}</p>
          <div>
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
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><FaShoppingCart></FaShoppingCart>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
