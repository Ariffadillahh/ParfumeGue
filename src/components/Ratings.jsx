import React from "react";
import { FaStar } from "react-icons/fa";

const Ratings = ({ review }) => {
  if (!review || !review.reviews || review.reviews.length === 0) {
    return (
      <div className="italic text-gray-500 text-center flex h-[40vh] items-center justify-center">
        <p className="">
          No reviews available for this product yet.
        </p>
      </div>
    );
  }
  return (
    <div>
      {review.reviews.map((item, index) => (
        <article key={index} className="border-b border-gray-600/10 pb-3 mb-3">
          <div className="flex items-center mb-4">
            <div className="font-medium ">
              <p>{item.name}</p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            {[...Array(item.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 text-lg" />
            ))}
          </div>

          <p className="my-2 text-gray-500 ">{item.comment}</p>
        </article>
      ))}
    </div>
  );
};

export default Ratings;
