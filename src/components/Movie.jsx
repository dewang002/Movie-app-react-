import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Search from "./partials/Search";
import Dropdown from "./partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

function Movie() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [Movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true)
  document.title= "Moviis | movies"
  async function getMovie() {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length>0){
        setMovie((preview) => [...preview, ...data.results]);
        setpage(page + 1);

      }else{
        sethasmore(false)
      }
      
    } catch (error) {
      console.log("error:", error.response);
    }
  }

  async function refreshpage(){
    if (Movie.length === 0) {
      getMovie()
    }else{
      setpage(1)
      setMovie([])
      getMovie()
    }
  }

  useEffect(() => {
    refreshpage();
  }, [category]);

  return Movie.length > 0 ? (
    <div className="p-4 w-full">
      <div className="flex items-start justify-between ">
        <div className="left w-[30%] flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-[#8576FF] font-black text-2xl"
          ></i>{" "}
          <h1 className="text-4xl font-bold text-zinc-300 ml-4 flex items-end gap-2">Movie's <div className=' font-light text-sm text-zinc-400'>({category})</div></h1>
        </div>
        <div className="right  flex justify-start items-center ">
          <div className="translate-y-[-23%] w-[100%]">
            <Search />
          </div>
          <div className="flex w-[32%]">
            <Dropdown
              title="Filter"
              options={["upcoming", "popular","top_rated","now_playing"]}
              func={(elem) => setcategory(elem.target.value)}
            />
            
          </div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={Movie.length}
        next={getMovie}
        hasMore={hasmore}
        loader={<h1 className="text-center pb-10">Loading...</h1>}
      >
        <Cards trending={Movie} title="movie"/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Movie
