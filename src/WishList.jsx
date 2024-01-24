import React from "react";
import TvCard from "./components/shared/TvCard";
import Card from "./components/shared/Card";

const WishList = () => {
  return (
    <div className="container wishlist">
      <h1>WishList</h1>
      <div className="left">
        <h1>Movies</h1>
        <div className="list">
          {/* <Card/> */}
        </div>
      </div>
      <div className="right">
        <h1>Tv Shows</h1>
        <div className="list">
        {/* <TvCard/> */}
        </div>
      </div>
    </div>
  );
};

export default WishList;
