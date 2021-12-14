import React, { createContext, useState } from "react";

export const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_API_KEY,
      },
    });

    const data = await res.json();
    setResults(data);
    setLoading(false);
    console.log(data);
  };

  return (
    <ResultContext.Provider
      value={{ results, getResults, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
