import React, { useContext } from "react";
import AllRoomsContext from "../Store/Context/AllRoomsContext";

const useRoomList = () => {
  const hotels = useContext(AllRoomsContext);
  return hotels;
};
export default useRoomList;
