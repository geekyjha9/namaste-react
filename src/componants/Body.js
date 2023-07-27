import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurent(
      json.data.success.cards[5].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  // Conditional Rendering

  //   if (listOfRestaurent.length === 0) {
  //     return <Shimmer />;
  //   }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <input type="text" className="search-box" ></input>
        <button className="search">Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        <div className="res-card">
          {listOfRestaurent.map((restaurent) => (
            <RestroCard key={restaurent.info.id} resData={restaurent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;