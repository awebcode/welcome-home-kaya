import { getOneProduct } from "@/redux/actions/productActions";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Rate } from "antd";
import Loader from "@/components/Loader";
import Custom404 from "@/components/CustomNotfound";
import { getProductReviews } from "@/redux/actions/reviewActions";
import ReactPaginate from "react-js-pagination";
import ReviewCard from "@/components/admin/dashboard/product/review/ReviewCart";
import Review from "@/components/admin/dashboard/product/review/ReviewToggle";
import { Rating } from "@material-ui/lab";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useRouter().query;

  const { product } = useSelector((s) => s.product);
  const { reviews } = useSelector((s) => s.review);
  useEffect(() => {
    dispatch(getOneProduct(id));
    getProductReviews(id);
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
  // review

  const options = {
    size: "large",
    value: product?.ratings || 4,
    readOnly: true,
    precision: 0.5,
  };
  //review
  const [open, setOpen] = useState(false);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  //pagination for review
  const similarReviewPerPage = 2;
  const [activePageReview, setActivePageReview] = useState(1);

  const handlePageReviewChange = (pageNumber) => {
    setActivePageReview(pageNumber);
  };

  const indexOfLastReview = activePageReview * similarReviewPerPage;
  const indexOfFirstReview = indexOfLastReview - similarReviewPerPage;
  const currentPageReviews =
    reviews &&
    reviews
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(indexOfFirstReview, indexOfLastReview);
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
            <div className="flex items-center mb-4 ">
              <Rating {...options} size="small" />{" "}
              <span className="mx-2">
                {" "}
                ({product?.numOfReviews} Reviews)
              </span>
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
            <button className="custom-btn w-full h-full" onClick={submitReviewToggle}>
              Submit Review
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {/* review */}

      <div className="p-4 m-6">
        <Review
          product={product}
          open={open}
          setOpen={setOpen}
          submitReviewToggle={submitReviewToggle}
        />
        {reviews && reviews.length > 0 && reviews ? (
          <>
            <div className="reviews">
              {currentPageReviews &&
                currentPageReviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
            {currentPageReviews && currentPageReviews.length < reviews.length && (
              <div className="w-screen flex justify-center items-center mt-4">
                <ReactPaginate
                  activePage={activePageReview}
                  activeLinkClass="page_active"
                  itemsCountPerPage={similarReviewPerPage}
                  totalItemsCount={reviews && reviews.length}
                  pageRangeDisplayed={3}
                  onChange={handlePageReviewChange}
                  itemClass="pagination-item"
                  linkClass="pagination-link"
                  prevPageText="Previous"
                  nextPageText="Next"
                />
              </div>
            )}
          </>
        ) : (
          <Custom404 />
        )}
      </div>
    </>
  );
};

export default ProductDetails;
