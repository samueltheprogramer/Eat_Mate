import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { dummyData } from "../utils/constant";

const Body = () => {
  const [restorenList, setRestorenList] = useState([]);
  const [filterdList, setFilterdList] = useState([]);
  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      const restaurants =
        dummyData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestorenList(restaurants);
      setFilterdList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <div className="flex flex-col md:flex-row w-full gap-10 justify-center p-5">
        <div>
          <input
            className="ring-1 ring-slate-600"
            type="text"
            value={serachText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-300 rounded-md px-5 mx-2"
            onClick={() => {
              const filteredListData = restorenList.filter((item) =>
                item.info.name.toLowerCase().includes(serachText.toLowerCase())
              );
              setFilterdList(filteredListData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-yellow-300 rounded-md px-5 mx-2"
          onClick={() => {
            const topRestorentList = restorenList.filter(
              (item) => item.info.avgRating > 4.3
            );
            setFilterdList(topRestorentList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="p-5">
        <ResCard filterdList={filterdList} />
      </div>
    </div>
  );
};

export default Body;
