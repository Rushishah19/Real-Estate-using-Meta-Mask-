// sections/DetailsPage.js

import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PiBathtubLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { BiArea } from "react-icons/bi";
import { ethers } from "ethers";

const DetailsPage = () => {
  const { productId } = useParams();
  console.log(productId);
  const location = useLocation();
  const { imgURL, label, bath, area, price, loc, beds, desc } = location.state;

  // Fetch details of the product based on the productId
  // You can add your logic to fetch and display product details here
   
// Function to connect to MetaMask
async function connectToMetaMask() {
  if (typeof window.ethereum!== 'undefined') {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to MetaMask:', accounts[0]);
    } catch (error) {
      console.error('User denied account access', error);
    }
  } else {
    console.log('MetaMask is not installed');
  }
}

// Function to send Ether
async function sendEther(amount, recipient) {
  if(
    window.ethereum
  ){console.log("meta mask available")}
  if (typeof window.ethereum!== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const transaction = {
      to: recipient,
      value: ethers.utils.parseEther(amount.toString()),
    };
    const tx = await signer.sendTransaction(transaction);
    console.log('Transaction hash:', tx.hash);
    return tx;
  } else {
    console.log('MetaMask is not installed');
    await connectToMetaMask();
  }
}


  return (
    <div className="min-h-screen border flex item-center justify-center p-6">
      {/* <h2 className="text-3xl pt-28 ">
        Product Details Page for ID: {productId}
      </h2> */}
      <div className=" h-4/5  w-full card  lg:card-side card-bordered bg-base-200   shadow-xl p-6  mx-20">
        <figure className=" rounded-lg object-contain  w-max  flex basis-1/2">
          <img src={imgURL} alt={label} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{loc}</h2>
          <p>{desc}</p>
          <div className="  w-full h-12 rounded-full bg-dark-gray flex  justify-around items-center">
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
            <div className=" flex  w-max tracking-widest font-monserrate  text-2xl">
              {price}
            </div>
            <div className="card-actions flex  ">
              <button className="btn  btn-outline btn-wide  " onClick = {()=>sendEther(price.split(" ")[0],"0x62Fcac4bB1e3B031B6ce88CBe93Ae1b7E3eC18e3")} >Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Render additional details of the product here */}
    </div>
  );
};

export default DetailsPage;
