import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const Mytoycard = ({ toy, setmytoys, mytoys }) => {
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

  const handledelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be Delete  this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        fetch(`https://robo-toy-server-shakil-121.vercel.app/mytoys/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
           if(data.deletedCount>0){
            Swal.fire("Deleted!", "Coffee deleted.", "success"); 
            const remmaining=mytoys.filter(toy=>toy._id!==_id); 
            setmytoys(remmaining)
          
          }
          });
      }
    });
  };

  return (
    <div>
      <table className="table w-full">
        <tbody>
          <tr className="border md:grid md:grid-cols-6  justify-items-center items-center">
            <td>
              <button
                onClick={() => handledelete(_id)}
                className="btn btn-circle btn-outline hover:bg-[red]"
              >
                <FaTrashAlt></FaTrashAlt>
              </button>
            </td>

            <td>
              <img className="w-14" src={picture_url} alt="" />
            </td>

            <td>{name}</td>

            <td>{sellername}</td>

            <td>{quantity}</td>

            <td>
              <Link to={`/update/${_id}`}>
                <button className="btn btn-active btn-ghost">update</button>
              </Link> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mytoycard;
