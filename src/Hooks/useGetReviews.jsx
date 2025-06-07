import React, { useContext } from "react";
import { ReviewContext } from "../Store/Context/ReviewContext";

const useGetReviews = () => {
  const reviews = useContext(ReviewContext);
  return reviews;
};

export default useGetReviews;
