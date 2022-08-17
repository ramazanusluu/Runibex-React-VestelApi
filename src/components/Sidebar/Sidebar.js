import React from "react";
import "./Sidebar.css";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";
import { fetchCategoryList } from "../../api";

function Sidebar() {
  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log("Sidebar", data.Result.TreeList);
  return (
    <div className="container">
      <div className="sidebar">
        {data.Result.TreeList.map((item, key) => (
          <ul key={key}>
            <li>
              <button className="btn btn-danger category">
                {item.DisplayName}
              </button>
              {item.SubCategoryList.map((item2, key2) => (
                <ul key={key2}>
                  <li>
                    <button className="btn btn-danger subCategory">
                      {item2.DisplayName}
                    </button>
                  </li>
                </ul>
              ))}
            </li>
          </ul>
        ))}
        <ul>
          <li>
            <button className="btn btn-danger category">Televizyon</button>
            <ul>
              <li>
                <button className="btn btn-danger subCategory">Smart</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
