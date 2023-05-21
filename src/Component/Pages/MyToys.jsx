import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import Mytoycard from "./Mytoycard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setmytoys] = useState([]);
  console.log(mytoys);

  useEffect(() => {
    fetch(`https://robo-toy-server-shakil-121.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setmytoys(data));
  }, [user])

  return (
    <div>
      <div className=" w-full p-16 ">
        <h1 className="my-6 text-2xl font-bold">My Total Toy : {mytoys.length}</h1>
        <table className="table w-full px-10">
          {/* head */}

          <thead>
            <tr className="md:grid md:grid-cols-6 justify-items-center bg-slate-200">
              <th className="bg-slate-200 -z-10">Delete</th>
              <th className="bg-slate-200">Photo</th>
              <th className="bg-slate-200">Name</th>
              <th className="bg-slate-200">Seller Name</th>
              <th className="bg-slate-200">Quantity</th>
              <th className="bg-slate-200">Edit / Update</th>
            </tr>
          </thead>

          <tbody >
            {mytoys.map((toy) => (
              <Mytoycard key={toy._id} 
              toy={toy}
              setmytoys={setmytoys}
              mytoys={mytoys}
              >
              
              </Mytoycard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
