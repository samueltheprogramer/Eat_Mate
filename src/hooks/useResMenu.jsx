import React, { useEffect, useState } from "react";
import { dummyResCardData,  } from "../utils/constant";

const useResMenu = () => {
  const [resInfoData, setResInfoData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = () => {
    try {
      const jsonData = dummyResCardData;
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
