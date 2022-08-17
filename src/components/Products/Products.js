import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { fetchProducts } from "../../api";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["products", product_id], () =>
    fetchProducts(product_id)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data.Result.ProductList);

  return (
    <div>
      {/* <h5>Products - {product_id}</h5> */}
      <div className="container my-5">
        <div className="row">
          {data.Result.ProductList.map((item, key) => (
            <ProductCard key={key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
