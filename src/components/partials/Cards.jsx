import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";
function Cards({ trending, title }) {
 
  return trending ? (
    <div className="flex flex-wrap justify-center gap-4 ">
      {trending.map((elem, index) => {
        return (
          <div
            key={index}
            className="md:h-[40vh] md:w-[20vw] md:shrink-0  rounded realtive"
          >
            <div className="h-[90%] w-[90%] bg-zinc-300 overflow-y-auto ">
              <Link
                to={`/${trending.media_type || title}/details/${elem.id}`}
                key={index}
              >
                <img
                  className="h-full w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
                  src={`https://image.tmdb.org/t/p/original/${
                    elem.profile_path || elem.backdrop_path || elem.poster_path
                  }`}
                  alt=""
                />
                {elem.vote_average && (
                  <div className="text-zinc-100 text-xl font-black absolute h-12 w-12 bg-yellow-500 rounded-full flex justify-center items-center md:translate-y-[-4vw] translate-y-[-15vw] md:translate-x-[16.8vw]">
                    {Math.floor(elem.vote_average * 10)}{" "}
                    <span className="text-sm">%</span>
                  </div>
                )}
              </Link>
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-center">
              {elem.original_title || elem.name}
            </h1>
          </div>
        );
      })}
    </div>
  ) : (
    <h1 className="text-xl pl-20 pt-20">
      <Loader />
    </h1>
  );
}

export default Cards;
