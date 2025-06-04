import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";

const Mainlayout = () => {
  return (
    <div className="dark:bg-gray-800">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Mainlayout;
