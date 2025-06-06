import React from "react";
import AllRoomsContext from "../Context/AllRoomsContext";
import fetchHotels from "../../Service/getAllRooms";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpiner";

const AllRoomsProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error loading hotels: {error.message}</p>;

  return (
    <AllRoomsContext.Provider value={data}>{children}</AllRoomsContext.Provider>
  );
};

export default AllRoomsProvider;
