import React from "react";
import { FaRegBookmark, FaShareAlt,FaRegStar,FaStar,FaEye } from "react-icons/fa";
import Rating from "react-rating";
import { Link} from "react-router-dom";



const SingleToyCard = ({ toy }) => {
  const { 
    _id,
    picture_url,
    name,
    sellername,
    selleremail,
    category,
    subcategory,
    price,
    rating,
    quantity,
    detail_description,
  } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-[0px_20px_60px_0px_#e53e3e] hover:duration-1000">
      <figure>
        <img
           className="w-full h-96"
          src={picture_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {name}
          <div className="badge badge-secondary">30% off</div>
        </h2>
        <h2 className="card-title">
         Price: ${price}
        </h2>
        <p>{detail_description}</p>
        <div className="flex justify-between">
            <p><span className="font-semibold">Seller:</span> {sellername}</p>
            <p><span className="font-semibold">Quantity:</span>{quantity}</p>
        </div>
        <div className="flex justify-between my-4">
          <div>
          <Rating 
          className="text-yellow-500"
            placeholderRating={rating}
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
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{subcategory}</div>
        </div>
        </div>
        <Link to={`/toy/${_id}`}><button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  );
};

export default SingleToyCard;
