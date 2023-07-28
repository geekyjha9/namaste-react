import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable => Superpowerful Veriable
  const [searchText, setSearchText] = useState([]);
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  // Whenever state variable updates => react triggers reconciliation cycle (re-renders the components)

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

    setFilteredList(
      json.data.success.cards[5].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  // Conditional Rendering

  //   if (listOfRestaurent.length === 0) {
  //     return <Shimmer />;
  //   }

  if (filteredList.length === 0) {
    return <h2 className="filter-rnf">Result Not Found...</h2>;
  }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search"
          onClick={() => {
            // Filter the restaurent cards and update the UI
            // searchText
            console.log("Clicked");

            const filteredListBySearch =
              searchText.length === 0
                ? listOfRestaurent
                : listOfRestaurent.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );

            setFilteredList(filteredListBySearch);
          }}
        >
          Search
        </button>
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
          {filteredList.map((restaurent) => (
            <RestroCard key={restaurent.info.id} resData={restaurent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
