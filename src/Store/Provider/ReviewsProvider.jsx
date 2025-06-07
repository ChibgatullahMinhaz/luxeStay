import React from "react";
import { ReviewContext } from "../Context/ReviewContext";
import { useQuery } from "@tanstack/react-query";
import loadReviews from "../../Service/getReviews";
import LoadingSpinner from "../../Components/LoadingSpiner";
import { toast } from "react-toastify";

const ReviewsProvider = ({ children }) => {
  const { data, isPending, isError,error  } = useQuery({
    queryKey: ["reviews"],
    queryFn: loadReviews,
  });
  if (isPending) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, 'Fail to Fetch Reviews Data!')
  }
  return <ReviewContext.Provider value={data}>{children}</ReviewContext.Provider>;
};

export default ReviewsProvider;
