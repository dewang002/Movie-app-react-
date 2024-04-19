import React from "react";
import { Link } from "react-router-dom";
import Trendingcard from "./Trendingcard";
import Loader from "../Loader";
const header = ({ data }) => {
  
  return data ? (
    <>
      <div className="w-full h-[60vh] mt-10 flex justify-center relative">
        <img
          className="w-full  object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${
            data.profile_path || data.backdrop_path
          }`}
          alt=""
        />
        <div
          className="absolute h-full w-full "
          style={{
            background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.4),rgba(0,0,0,.8))`,
          }}
        >
          <div className="flex justify-end pl-10 pb-4  flex-col h-full w-full">
            <h1 className="text-5xl w-[70%] font-black pb-6">
              {data.original_title || data.name}
            </h1>
            <h3 className="text-1xl w-[50%] mix-blend-screen text-zinc-400">
              {data.overview}...{" "}
              <Link
                to={`/${data.media_type}/details/${data.id}`}
                className="text-blue-200 opacity-60 hover:opacity-100"
              >
                more
              </Link>
            </h3>
            <div className="w-[50%] h-[10%] flex justify-start items-center">
              <i className="ri-calendar-check-fill text-[#8644A2] text-xl pr-2"></i>
              <h2 className="text-sm font-light">
                {data.release_date ? data.release_date : <h1>No Info...</h1>}
              </h2>
              <i className="ri-clapperboard-line text-[#8644A2] text-xl pr-2 pl-2"></i>
              <h2 className="text-sm font-light uppercase">
                {data.media_type}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1 className="text-xl pl-20 pt-20">
      <Loader />
    </h1>
  );
};

export default header;
