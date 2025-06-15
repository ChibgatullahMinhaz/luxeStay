import React from "react";
import { useQuery } from "@tanstack/react-query";
import roomDetails from "../Service/roomDetails";
const useRoomDetails = (id) => {
 
  const { data, isLoading, error } = useQuery({
    queryKey: ["roomReviews", id],
    queryFn: () => roomDetails(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};

export default useRoomDetails;
