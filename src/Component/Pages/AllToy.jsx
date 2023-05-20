import React, { useEffect, useState } from 'react';
import SingleToyCard from './SingleToyCard'; 
import banner from '../../assets/AllToy.png' 
import usetitle from '../DaynamicTitle/usetitle';
import { FaSearch } from "react-icons/fa";


const AllToy = () => { 
    const [searchText, setSearchText] = useState(""); 
    const [visible,setVisible]=useState([20]) 
    const showall=()=>{ 
        setVisible((pervalue)=>pervalue+2);
    }
   const [toys,setToys]=useState([]) 
   useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res=>res.json()) 
    .then(data=>setToys(data))
   },[])
  
   const handleSearch = () => {
    fetch(`http://localhost:5000/gettoys/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

   usetitle("All Toy")
    return (
        <div> 
        <div>
          <img className='rounded-b-2xl w-full mb-10' src={banner} alt="" />
        </div>
            <div className='md:p-10'> 
                <div className='flex justify-center items-center py-10'>
                <input
                 onChange={(e) => setSearchText(e.target.value)}
                type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={handleSearch} class="btn btn-primary ms-4"><FaSearch></FaSearch> Search</button>
                </div>
            <div className='md:grid grid-cols-3 gap-4'>
            {
                toys.slice(0,visible).map(toy=><SingleToyCard 
                key={toy._id}
                toy={toy}
                ></SingleToyCard>)

            }
            </div>
            <div className="showAll flex justify-center my-4"> 
                <button className='btn btn-primary"'  onClick={showall}>Show All</button>
                </div>
            </div>
        </div>
    );
};

export default AllToy;