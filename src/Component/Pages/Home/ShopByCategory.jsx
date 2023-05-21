import React, { useEffect, useState }  from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToyCard from "../SingleToyCard";

const ShopByCategory = () => {  
  const [toys,settoys]=useState([])
  const [category,setCategory]=useState("TalkingRobo") 
  const handleCategory=category=>{ 
    setCategory(category)
  } 

  useEffect(()=>{
   fetch(`https://robo-toy-server-shakil-121.vercel.app/category/${category}`)
   .then(res=>res.json()) 
  .then(data=>settoys(data))
  },[category]); 
  
  return (
    <div className="my-24 mx-10">
      <div>
        <h1 className="font-bold text-4xl text-center">Shop By Category</h1>
      </div>
      <div>
        <Tabs className="my-6">


          <TabList className="font-semibold bg-blue-950 rounded-lg p-4 text-white">
            <Tab onClick={()=>handleCategory("TalkingRobo")}>Talking Robo</Tab>
            <Tab onClick={()=>handleCategory("AnimalRobo")}>Animal Robo</Tab>
            <Tab onClick={()=>handleCategory("BirdRobo")}>Bird Robo</Tab>
          </TabList>


          <TabPanel>
            <div className="w-full md:grid  md:grid-cols-3 gap-4 my-20">
            {
              toys.map(toy=><SingleToyCard
              key={toy?._id} 
              toy={toy}
              >
              </SingleToyCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="w-full md:grid  md:grid-cols-3 gap-4 my-20">
            {
              toys.map(toy=><SingleToyCard
              key={toy?._id} 
              toy={toy}
              >
              </SingleToyCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="w-full md:grid  md:grid-cols-3 gap-4 my-20">
            {
              toys.map(toy=><SingleToyCard
              key={toy?._id} 
              toy={toy}
              >
              </SingleToyCard>)
            }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
