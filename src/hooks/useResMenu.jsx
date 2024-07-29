import React, { useEffect, useState } from "react";
import { RESMENU_API } from "../utils/constant";

const useResMenu = (resId) => {
  const [resInfoData, setResInfoData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(RESMENU_API + resId);
      const jsonData = await data.json();
      setResInfoData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  const { name, avgRatingString, costForTwoMessage } =
    resInfoData?.data?.cards[2]?.card?.card?.info || "";

  const { cuisines } = resInfoData?.data?.cards[2]?.card?.card?.info || [];

  const { itemCards } =
    resInfoData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card || [];

  return {
    resInfoData,
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    itemCards,
  };
};

export default useResMenu;
