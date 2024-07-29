import React from "react";
import { RES_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleOnclick = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="text-left mx-4 my-12 pb-8 flex border-b-2 border-slate-200"
        >
          <div className="flex flex-col w-10/12">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span className="font-bold text-slate-700">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p className=" font-bold text-slate-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-2/12 relative">
            <button
              onClick={() => handleOnclick(item)}
              className=" px-3 rounded-xl absolute  bg-white text-black font-bold right-8 bottom-0  hover:bg-black hover:text-slate-200  hover:cursor-pointer"
            >
              ADD
            </button>
            <img
              src={RES_IMG_URL + item?.card?.info?.imageId}
              alt=""
              className=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
