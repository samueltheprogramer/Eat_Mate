import { RES_IMG_URL } from "../utils/constant.js";
import ShimmerCard from "./ShimmerCard.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.jsx";

const ResCard = ({ filterdList }) => {
  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <h1>Hey there !!! You are offline ...</h1>;
  }

  return filterdList?.length === null ? (
    <ShimmerCard />
  ) : (
    <div className="flex flex-wrap gap-5 px-5 w-full justify-center">
      {filterdList?.map((item, index) => (
        <Link
          key={index}
          to={"/restorent/" + item.info.id}
          className="w-full sm:w-auto"
        >
          <div className="bg-slate-200 hover:bg-slate-400 flex flex-col justify-center items-center text-center rounded-xl p-3">
            <img
              className="w-52 h-56 rounded-xl"
              src={RES_IMG_URL + item.info?.cloudinaryImageId}
              alt={`${item.info.name} restaurant`}
            />
            <p className="w-40 font-semibold mt-2">{item.info.name}</p>
            <p className="w-40 mt-1">{item.info.costForTwo}</p>
            <p className="w-40 text-xs mt-1">{item.info.locality}</p>
            <p className="w-40 mt-1">Ratings: {item.info.avgRating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResCard;
