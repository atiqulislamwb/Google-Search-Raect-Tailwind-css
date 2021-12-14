import React from "react";
import Loader from "react-loader-spinner";

 const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="Puff" color="#FF6347" height={550} width={80} />
  </div>
);

export default Loading
