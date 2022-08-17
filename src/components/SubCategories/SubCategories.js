import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSubCategories } from "../../api";
import { Link } from "react-router-dom";
import dummy from "../../image/dummy.jpg";
import Loading from "../Loading/Loading";
import "./SubCategories.css";

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
      {/* <h5>
        {category_id} - {data.Result.CategoryName}
      </h5>
      <div>
        {data.Result.TopCategory.SubCategoryList.map((item, key) => (
          <div key={key}>{item.DisplayName}</div>
        ))}
      </div> */}
      <div className="container my-5">
        <div className="row">
          <h5 className="display-6 text-center">{data.Result.CategoryName}</h5>
          {data.Result.TopCategory.SubCategoryList.map((item, key) => (
            <div key={key} className="col-sm-6 col-lg-4 col-xl-3">
              <Link to={`/products/${item.ID}`}>
                <div className="card subCategory-card mt-5">
                  <div className="card-head subCategory-card-head">
                    <img
                      src={!item.ImageUri ? dummy : item.ImageUri}
                      className="card-img-top"
                      alt={item.DisplayName}
                    />
                  </div>
                </div>
                <div className="card-text title my-3 text-center">
                  {item.DisplayName}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubCategories;
