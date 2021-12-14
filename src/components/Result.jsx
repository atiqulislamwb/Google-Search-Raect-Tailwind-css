import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { ResultContext } from "../contexts/contextApi";

import Loading from "./Loading";

const Result = () => {
  const { results, loading, getResults, searchTerm } =
    useContext(ResultContext);

  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  console.log(results);

  if (loading) return <Loading />;

  if (location.pathname === "/search") {
    return (
      <div className="sm:px-56 flex flex-wrap justify-between space-y-6 ">
        {results?.results?.map(({ link, title }, index) => (
          <div key={index} className="md:w-2/5 w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p className="text-sm">
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-800">
                {title}
              </p>
            </a>
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/images") {
    return (
      <div className="flex flex-wrap justify-center items-center overflow-y-auto ">
        {results?.image_results?.map(
          ({ image, link: { href, title } }, index) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="sm:p-3 p-5"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          )
        )}
      </div>
    );
  }

  if (location.pathname === "/news") {
    return (
      <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
        {results?.entries?.map(({ id, links, source, title }) => (
          <div className="md:w-2/5 w-full" key={id}>
            <a
              href={links?.[0].href}
              target="_blank"
              rel="noreferrer"
              className="sm:p-3 p-5"
            >
              <p className="text-lg dark:text-blue-300 text-blue-700  ">
                {title}
              </p>
            </a>
            <div>
              <a
                href={source?.href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:text-blue-700"
              >
                {source?.href}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/videos") {
    return (
      <div className="flex flex-wrap ">
        {results?.results?.map((video, index) => (
          <div className="p-2" key={index}>
            <ReactPlayer
              url={video.additional_links?.[0].href}
              controls
              width="355px"
              height="200px"
            />
          </div>
        ))}
      </div>
    );
  }
};

export default Result;
