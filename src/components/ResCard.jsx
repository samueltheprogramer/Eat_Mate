import { RES_IMG_URL } from "../utils/constant.js";
import ShimmerCard from "./ShimmerCard.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.jsx";

const ResCard = ({ filterdList }) => {
  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return <h1>Hey there !!! You are offline ...</h1>;
  }

  return filterdList?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="flex flex-wrap flex-col sm:flex-row gap-5 px-5 w-full justify-center ">
      {filterdList?.map((item, index) => (
        <Link key={index} to={"/restorent/" + item.info.id}>
          <div className="bg-slate-200 hover:bg-slate-400 flex flex-col justify-center items-center   text-center rounded-xl">
            <img
              className="w-52 h-56 rounded-xl"
              src={RES_IMG_URL + item.info?.cloudinaryImageId}
              alt="rest image"
            />
            <p className="text-wrap w-40">{item.info.name}</p>
            <p className="price">{item.info.costForTwo}</p>
            <p className="text-wrap w-40 text-xs">{item.info.locality}</p>
            <p className="ratings">Ratings: {item.info.avgRating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResCard;
