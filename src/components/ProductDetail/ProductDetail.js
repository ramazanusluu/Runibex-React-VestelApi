import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { fetchProductDetail } from "../../api";

function ProductDetail() {
  const { product } = useParams();
  const { isLoading, error, data } = useQuery(["productDetail", product], () =>
    fetchProductDetail(product)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <h1>Product Detail - {product}</h1>
    </div>
  );
}

export default ProductDetail;
