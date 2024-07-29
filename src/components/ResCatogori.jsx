import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCatogori = ({ data, showItems, setShowItems }) => {
  const handleAccordiantToggle = () => {
    setShowItems();
  };
  return (
    <div className="w-7/12 bg-slate-100 shadow-lg">
      <div
        className=" flex justify-between hover:bg-slate-200  rounded-xl hover:cursor-pointer "
        onClick={handleAccordiantToggle}
      >
        <span className="font-bold text-lg  ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      <div>{showItems ? <ItemList items={data.itemCards} /> : ""}</div>
    </div>
  );
};

export default ResCatogori;
