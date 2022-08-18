import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { fetchProductDetail } from "../../api";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product } = useParams();
  const { isLoading, error, data } = useQuery(["productDetail", product], () =>
    fetchProductDetail(product)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  const images = data.Result.ImageSetList[0].ImageList.map((url) => ({
    original: url.Path,
  }));

  return (
    <div>
      {/* <h1>Product Detail - {product}</h1> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <ImageGallery items={images} showThumbnails={true} />
          </div>
          <div className="col-md-6">
            <h1>resim</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
