import React from "react";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <>
      <header>
        <nav>navber</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Mainlayout;
