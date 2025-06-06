import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import LoadingSpinner from "../Components/LoadingSpiner";
import ScrollToTop from "../Components/ScrollToTop";

const Mainlayout = () => {
  const [routeLoader, setRouteLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setRouteLoading(false);
  }, [location]);

  if (routeLoader) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <ScrollToTop />

      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{routeLoader ? <LoadingSpinner /> : <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayout;
