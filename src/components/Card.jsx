import React from "react";
import { PiBathtubLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { BiArea } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
const Card = ({ id, imgURL, label, bath, area, price, loc, beds, desc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the details page with the product ID
    navigate(`/product/${id}`, {
      state: {
        imgURL,
        label,
        bath,
        area,
        price,
        loc,
        beds,
        desc,
      },
    });
  };
  return (
    <div className="card  w-72  bg-base-100 shadow-xl flex-shrink-0 ">
      <figure className=" object-cover">
        <img src={imgURL} alt={label} />
      </figure>
      <div className="card-body px-4 ">
        <h2 className="card-title">
          <SlLocationPin />
          {loc}
        </h2>
        <p>{desc}</p>
        <div className=" w-46 gap-2  h-8 rounded-full bg-dark-gray flex  justify-around items-center">
          <span className="flex justify-center items-center gap-1 flex-grow">
            <IoBedOutline />
            {beds}
          </span>
          <span className="flex justify-center items-center gap-1 flex-grow">
            <PiBathtubLight />
            {bath}
          </span>
          <span className="flex justify-center items-center gap-1  flex-grow">
            <BiArea />
            {area}
          </span>
        </div>
        <div className="w-full  flex justify-between items-center pt-2">
          <div className=" flex  w-max tracking-widest font-monserrate  text-lg">
            {price}
          </div>
          <div className="card-actions flex  ">
            <button
              className="btn btn-neutral  btn-md w-max "
              onClick={handleClick}
              >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
