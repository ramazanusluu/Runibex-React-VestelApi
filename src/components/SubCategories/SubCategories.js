import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSubCategories } from "../../api";
import Loading from "../Loading/Loading";

function SubCategories() {
  const { category_id } = useParams();
  const { isLoading, error, data } = useQuery(
    ["subCategory", category_id],
    () => fetchSubCategories(category_id)
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }
  console.log(data);
  console.log(data.Result.TopCategory.SubCategoryList);
  return (
    <div>
      <h5>
        {category_id} - {data.Result.CategoryName}
      </h5>
      <div>
        {data.Result.TopCategory.SubCategoryList.map((item, key) => (
          <div key={key}>{item.DisplayName}</div>
        ))}
      </div>
    </div>
  );
}

export default SubCategories;
