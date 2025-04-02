import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F2EEE7] flex flex-col">
      <nav className="bg-[#62483A] text-white p-4 shadow-md">
        <ul className="flex gap-4 justify-end">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className="hover:text-yellow-400">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div className=" mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;