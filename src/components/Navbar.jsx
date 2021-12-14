import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="  p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b-2 dark:border-gray-700 border-gray-200  ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-purple-700 font-bold text-white p-2 rounded-lg dark:bg-gray-50 dark:text-gray-900 text-center  ">
            Google Search
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-5 py-3 hover:shadow-lg"
        >
          {darkTheme ? "💡 " : "🌙 "}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
