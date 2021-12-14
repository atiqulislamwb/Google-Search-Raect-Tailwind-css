import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

const Link = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4  ">
      {links.map((link) => (
        <NavLink
          to={link.url}
          activeClassName="text-blue-800  border-b-2 dark:text-blue-300 border-blue-700 pb-3  "
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Link;
