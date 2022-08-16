import React from "react";
import "./CategoryCard.css";

function CategoryCard({ item }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="card mt-5">
          <div className="card-head">
            <img src={item.ImageUri} className="card-img-top" alt={item.Code} />
          </div>
        </div>
        <div className="card-text title my-3 text-center">{item.DisplayName}</div>
      </div>
    </>
  );
}

export default CategoryCard;
