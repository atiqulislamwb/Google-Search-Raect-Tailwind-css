import React from "react";
import Result from "./Result";
import { Route, Routes, Navigate } from "react-router-dom";

const RouteApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />

        <Route path="/search" element={<Result />} />
        <Route path="/news" element={<Result />} />
        <Route path="/images" element={<Result />} />
        <Route path="/videos" element={<Result />} />
      </Routes>
    </div>
  );
};

export default RouteApp;
