import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useResMenu from "../hooks/useResMenu";
import ResCatogori from "./ResCatogori";
import { useState } from "react";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const {
    resInfoData,
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    itemCards,
  } = useResMenu(resId);

  if (resInfoData.length === 0) {
    return <ShimmerCard />;
  }

  const catogories =
    resInfoData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 text-center justify-center items-center w-full ">
        <div className="flex gap-5 text-xl font-bold">
          <h1>{name}</h1>
          <h6>Rattings :{avgRatingString}</h6>
          <h2>{costForTwoMessage} </h2>
        </div>
        <h3 className="text-xl">Food varients :{cuisines.join(",")}</h3>
        {catogories.map((category, index) => (
          <ResCatogori
            key={index}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
