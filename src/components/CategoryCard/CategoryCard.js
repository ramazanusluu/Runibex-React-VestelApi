import React from "react";

function CategoryCard({ item }) {
  return (
    <>
      <div className="col-lg-4">{item.DisplayName}</div>
    </>
  );
}

export default CategoryCard;
