import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body-container">
        <div className="search-bar">SearchBar</div>
        <div className="res-container">
          <div className="res-card">
            {resList.map((restaurent) => (
              <RestroCard key={restaurent.info.id} resData={restaurent} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Body;