import React from "react";
import { Link } from "react-router-dom";

function Trendingcard({trend,category}) {

  return (
    <div className="h-[34%] w-full flex overflow-hidden overflow-x-auto gap-4 ">
     

      {(trend.map((elem,index)=>{
        return  <Link key={index} to={`/${elem.media_type || category}/details/${elem.id}`} className="w-[100vh] ">
      
        <div  className="h-full w-[30vh] rounded-lg flex flex-col shrink-0 bg-zinc-700 overflow-hidden overflow-y-auto">
        <div className=" h-[55%] ">
          <img className="h-full w-full object-cover object-top" src={`https://image.tmdb.org/t/p/original/${elem.profile_path || elem.backdrop_path }`} alt="" />
        </div>
        <div className="pl-4 ">
          <h1 className="font-bold text-2xl">{elem.original_title || elem.name||elem.title}</h1>
          <p className="text-xs leading-[1.5vh]  text-zinc-400 pt-3">{elem.overview.slice(0,100)}... <span className="text-sky-400">more</span></p>
        </div>
      </div>
      </Link>
    }))}
      
    </div>
  )
}

export default Trendingcard;
