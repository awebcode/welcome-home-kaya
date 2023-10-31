import { getOneProduct } from "@/redux/actions/productActions";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Rate } from "antd";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useRouter().query;

  const { product } = useSelector((s) => s.product);
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  // Generate thumbnails
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    if (product) {
      const thumbnails = product?.images?.map((image) => ({
        thumbnailTitle: "House Builder",
        original: image,
        thumbnail: image,
      }));

      if (thumbnails && thumbnails.length > 0) {
        setThumbnails(thumbnails);
      }
    }
  }, [product]);

  return (
    <>
      {product ? (
        <div className="container mx-auto p-4 flex justify-between items-center flex-wrap md:flex-nowrap my-4">
          <div className="md:min-w-[40vw] max-w-[90vw] mr-8 my-5">
            <ReactImageGallery
              thumbnailTitle={true}
              showBullets
              slideDuration={1000}
              autoPlay={true}
              swipingTransitionDuration={300}
              sizes={["large"]}
              thumbnailHeight={500}
              thumbnailWidth={700}
              items={thumbnails}
              slideOnThumbnailOver={true}
              lazyLoad={true}
            />
          </div>
          <div className="bg-white p-8 rounded shadow-md max-w-3xl w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{product.title}</h2>
            <Divider className="bg-gray-300" />
            <div className="mb-4 text-3xl  my-2 text-gray-800 flex justify-start gap-2 items-center">
              <div>
                <strong>Price:</strong> $ {product.price - product.price * 0.2}{" "}
                <span className="text-xs">(20% off)</span>
              </div>
              <sup className="line-through text-xl">${product.price}</sup>
            </div>

            <Divider className="bg-gray-300" />
            <div className="flex items-center mb-4">
              <Rate allowHalf defaultValue={4} />
            </div>
            <Divider className="bg-gray-300" />
            <div className="mb-4">
              <strong>Company Name:</strong> {product.companyName}
            </div>

            <div className="mb-4">
              <strong>Category:</strong> {product.category}
            </div>

            <div className="mb-4">
              <strong>Subcategory:</strong> {product.subcategory}
            </div>

            {product.subSubcategory && (
              <div className="mb-4">
                <strong>Sub-Subcategory:</strong> {product.subSubcategory}
              </div>
            )}

            <Divider className="bg-gray-300" />

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-800">{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 text-center">Loading...</div>
      )}
    </>
  );
};

export default ProductDetails;
