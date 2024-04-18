import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notfound from "../Notfound";
function Trailer() {
  const navigate = useNavigate();
  // add tv here on link below
  const ytvideo = useSelector((state) => state.movie.info.videos[0]);
  console.log(ytvideo);
  return (
    <div className="h-full w-full  absolute top-0 left-0 flex justify-center items-center">
      <i
        onClick={() => navigate(-1)}
        className="ri-close-fill text-[white] hover:text-[#8576FF] font-black text-2xl absolute right-72 top-[10%]"
      ></i>

     {ytvideo.key ? <div className="h-[70%] w-[62%] z-40 rounded-[20px] overflow-hidden">
        <ReactPlayer
          height={700}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      </div> : <Notfound />} 

    </div>
  );
}

export default Trailer;
