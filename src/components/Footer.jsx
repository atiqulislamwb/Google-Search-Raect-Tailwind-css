import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-10 border-t dark:border-gray-700 border-gray-800 ">
      <span> &copy; {new Date().getFullYear()} Atiqul Islam Wb </span>
    </div>
  );
};

export default Footer;
