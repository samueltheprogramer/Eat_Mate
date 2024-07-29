import { useEffect, useState } from "react";
import ResCard from "./ResCard";

const Body = () => {
  const [restorenList, setRestorenList] = useState([]);
  const [filterdList, setFilterdList] = useState([]);
  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    jsonData = await data.json();

    setRestorenList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterdList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="flex gap-10 justify-center p-5  ">
        <div>
          <input
            className="ring-1 ring-slate-600"
            type="text"
            name=""
            id=""
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
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
          TopRatedRestorents
        </button>
      </div>
      <div>
        <ResCard filterdList={filterdList} />
      </div>
    </div>
  );
};

export default Body;
