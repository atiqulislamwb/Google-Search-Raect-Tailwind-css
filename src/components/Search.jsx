import React, { useContext, useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { ResultContext } from "../contexts/contextApi";

import Link from "./Link";

const Search = () => {
  const { setSearchTerm } = useContext(ResultContext);
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 400);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:mt-10 mt-4">
      <input
        value={text}
        type="text"
        placeholder=" Search or type URL"
        onChange={(e) => setText(e.target.value)}
        className="sm:w-96 w-80 h-10 dar:bg-gray-200 border rounded-full shadow-sm outline-noe p-6 text-black hover:shadow-lg  "
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Link />
    </div>
  );
};

export default Search;
