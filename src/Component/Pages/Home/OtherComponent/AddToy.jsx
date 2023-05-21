import React, { Link, useContext } from "react";
import usetitle from "../../../DaynamicTitle/usetitle";
import { AuthContext } from "../../../AuthProvider/Authprovider";
import Swal from 'sweetalert2'


const AddToy = () => {
  usetitle("Add Toys"); 
  const {user}=useContext(AuthContext)

  const handleSubmit =(event)=> {
    event.preventDefault()
    const form=event.target; 
    const name=form.name.value;
    const sellername=form.sellername.value;
    const selleremail=form.selleremail.value;
    const category=form.category.value;
    const subcategory=form.subcategory.value;
    const price=form.price.value;
    const picture_url=form.picture_url.value; 
    const rating=form.rating.value; 
    const quantity=form.quantity.value; 
    const detail_description=form.detail_description.value; 
    const newToy={name,sellername,selleremail,category,subcategory,picture_url,rating,quantity,price,detail_description}  
    console.log(newToy); 

    fetch('https://robo-toy-server-shakil-121.vercel.app/toys',{
      method:"POST", 
      headers:{
         "content-type":"application/json"
      }, 
      body:JSON.stringify(newToy)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId)
        {
            Swal.fire({
                title: 'Added',
                text: 'New Toy Add Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        } 
        form.reset()
    })


  };
  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center my-10 font-semibold text-3xl">
          Add New Toy
        </h1>
        {/* row */}
        <div className="grid grid-cols-2  mt-6 mx-24">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control ps-6">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellername"
              placeholder="Type here"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* row */}
        <div className="grid grid-cols-2  mt-6 mx-24">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              name="selleremail"
              type="text"
              placeholder="Type here"
              defaultValue={user?.email}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control ps-6">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              name="quantity"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          
        </div>
        {/* row */}
        <div className="grid grid-cols-2  mt-6 mx-24">
        <div className="form-control ps-6">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
            name="category"
            className="select select-secondary w-full max-w-xs">
              <option disabled selected>
                Select Toy Category
              </option>
              <option>TalkingRobo</option>
              <option>AnimalRobo</option>
              <option>BirdRobo</option>
            </select>
          </div>
          <div className="form-control ps-6">
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <select
            name="subcategory"
            className="select select-secondary w-full max-w-xs">
              <option disabled selected>
              Select Toy Sub-Category
              </option>
              <option>Bangla_talkRobo</option>
              <option>English_talkRobo</option>
              <option>Arabic_talkRobo</option>
              <option>CatRobo</option>
              <option>DogRobo</option>
              <option>DaynosorRobo</option>
              <option>FlyingRobo</option>
              <option>Non-FlyingRobo</option>
              <option>MiniRobo</option>
            </select>
          </div>
          
        </div>
        {/* row */}
        <div className="grid grid-cols-2  mt-6 mx-24">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control ps-6">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea name="detail_description" placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
          </div>
        </div>
        {/* row */}
        <div className="form-control mx-24 mt-6">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            name="picture_url"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mx-24 mt-6">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            name="rating"
            type="text"
            placeholder="Enter Rate upto 5"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mx-24">
          <button type="submit" className="btn btn-primary btn-block mt-6">
            Add New Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
