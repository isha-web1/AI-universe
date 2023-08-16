import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);


    useEffect(()=>{
       const loadData = async () =>{
         const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
         const data = await res.json();
         setData(data.data.tools)
       }
       loadData()
    },[])


    return (
        <>
          {
            data.map(singleData => <SingleData 
                key={singleData.id}
                singleData = {singleData}
            ></SingleData>)
          }  
        </>
    );
};

export default Card;