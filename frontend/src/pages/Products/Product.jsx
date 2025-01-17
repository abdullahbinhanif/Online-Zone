import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../redux/API/productApiSlice";
import Ratings from "./Ratings";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
// import { addToCart } from "../../redux/features/cart/cartSlice";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import moment from "moment";
import ProductTabs from "./ProductTabs";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to truncate the name if more than 4 words
  const truncateName = (name) => {
    const words = name.split(" ");
    if (words.length > 3 && !isExpanded) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return name;
  };

  // const { id: productId } = useParams();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [qty, setQty] = useState(1);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  // const {
  //   data: product,
  //   isLoading,
  //   refetch,
  //   error,
  // } = useGetProductDetailsQuery(productId);

  // const { userInfo } = useSelector((state) => state.auth);

  // const [createReview, { isLoading: loadingProductReview }] =
  //   useCreateReviewMutation();

  // // const addToCartHandler = () => {
  // //   dispatch(addToCart({ ...product, qty }));
  // //   navigate("/cart");
  // // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await createReview({
  //       productId,
  //       rating,
  //       comment,
  //     }).unwrap();
  //     refetch();
  //     toast.success("Review created successfully");
  //   } catch (err) {
  //     toast.error(err?.data?.message || err.error);
  //   }
  // };

  return (
    <div className="relative mt-8">
      <div className="relative bg-gray-800 p-2 sm:p-4 rounded-lg shadow-md transition-all transform duration-300 hover:shadow-2xl hover:bg-gray-900">
        <div className="bg-gray-800 p-2 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="w-full relative overflow-hidden rounded-lg">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[15rem] object-cover rounded-lg bg-gray-800 shadow-lg shadow-gray-600 duration-300 transform transition-all hover:shadow-xl"
              />
            </Link>
            <HeartIcon
              product={product}
              className="absolute top-2 right-2 text-pink-500 hover:text-pink-600"
            />
          </div>

          <div className="flex flex-col gap-3 items-start">
            <Link to={`/product/${product._id}`}>
              <h2 className="flex flex-col items-start text-white text-[14px] xl:text-[17] font-semibold mt-2">
                <span >{truncateName(product.name)}</span>
              </h2>
            </Link>

            {/* "See More" or "See Less" button */}
            {product.name.split(" ").length > 4 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-pink-400 text-xs mt-1 hover:underline"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            )}
            <span className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
              BDT {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
