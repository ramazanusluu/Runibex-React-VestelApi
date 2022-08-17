import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { fetchProducts } from "../../api";

function Products() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["products", product_id], () =>
    fetchProducts(product_id)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <h5>Products - {product_id}</h5>
    </div>
  );
}

export default Products;
