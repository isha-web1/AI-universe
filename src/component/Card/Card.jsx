import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const data = await res.json();
      setData(data.data.tools);
    };
    loadData();
  }, []);
  const handleShowAll = () =>{
    setShowAll(true)
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12 my-6">
         {
            data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData 
                key={singleData.id}
                singleData = {singleData}
            ></SingleData>)
          }
      </div>
      <p onClick={handleShowAll}>
      <Button>see more</Button>
      </p>
    </>
  );
};

export default Card;
