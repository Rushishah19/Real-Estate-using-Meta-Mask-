import React from "react";
import Card from "../components/Card";
import { cardData, cardData2 } from "../constant";

const Product = () => {
  return (
    <section className="padding-r padding-l  padding-b flex items-center justify-center flex-col ">
      <h1  className=" font-poppins text-white  uppercase   tracking-[7px] mx-auto  leading-normal text-4xl  pb-8   ">
        Brampton
      </h1>
      <div className="flex gap-6 flex-wrap justify-between items-center w-full">
        {cardData.map((item, index) => (
          <Card
            key={index}
            imgURL={item.imgURL}
            label={item.label}
            {...item}
          ></Card>
        ))}
      </div>
      <h1 className=" font-poppins text-white uppercase   tracking-[7px] mx-auto  leading-normal text-4xl  pb-8   ">
        Toronto
      </h1>
      <div className="flex gap-6 flex-wrap justify-between items-center w-full">
        {cardData2.map((item, index) => (
          <Card
            key={index}
            imgURL={item.imgURL}
            label={item.label}
            {...item}
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default Product;
