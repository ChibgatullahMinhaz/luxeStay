import React from "react";
import { Helmet } from 'react-helmet';
import HeroSlider from "../../Components/HeroSlider";
import FeaturedRooms from "../../Components/FeaturedRooms";
import SpecialOffers from "../../Components/SpecialOffers";
import UserReviews from "../../Components/UserReviews";
import Amenities from "../../Components/Amenities";
import HotelMap from "../../Components/HotelMap";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          LuxeStay Hotel - Luxury Accommodations & Premium Hospitality
        </title>
        <meta
          name="description"
          content="Experience unparalleled luxury at LuxeStay Hotel. Premium rooms, world-class amenities, and exceptional service in the heart of the city."
        />
        <meta
          name="keywords"
          content="luxury hotel, premium accommodations, hotel booking, hospitality, suites, rooms"
        />
      </Helmet>{" "}


      <div className="min-h-screen overflow-hidden">
      <HeroSlider />
      <FeaturedRooms />
      <SpecialOffers />
      <UserReviews />
      <Amenities />
      <HotelMap />
       
      </div>

    </>
  );
};

export default Home;
