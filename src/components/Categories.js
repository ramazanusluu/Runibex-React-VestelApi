import React from "react";
import Loading from "./Loading/Loading";
import { useQuery } from "react-query";
import CategoryCard from "./CategoryCard/CategoryCard";

function Categories() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://store.vrunibex.com/mobile2/mbProduct/CategoryList").then(
      (res) => res.json()
    )
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;
  console.log(data.Result.TreeList);
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.Result.TreeList.map((item, key) => (
            <CategoryCard key={key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
