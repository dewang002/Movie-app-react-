import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Search from "./partials/Search";
import Dropdown from "./partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

function Popular() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true)
 document.title= "Moviis | Popular"
  async function getpopular() {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      console.log(data);
      if (data.results.length>0){
        setpopular((preview) => [...preview, ...data.results]);
        setpage(page + 1);

      }else{
        sethasmore(false)
      }
      
    } catch (error) {
      console.log("error:", error.response);
    }
  }

  async function refreshpage(){
    if (popular.length === 0) {
      getpopular()
    }else{
      setpage(1)
      setpopular([])
      getpopular()
    }
  }

  useEffect(() => {
    refreshpage();
  }, [category]);
  return popular.length > 0 ? (
    <div className="pt-0 md:pt-4 p-4  w-full">
            <div className="fixed z-[999] md:flex items-start justify-start bg-[#27272A]">
        <div className=" left w-[30%] flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-[#8576FF] font-black text-2xl"
          ></i>{" "}
          <h1 className="text-4xl font-bold text-zinc-300 ml-4 flex items-end gap-2">Popular</h1>
        </div>
        <div className="right w-full h-full flex flex-col md:flex-row justify-center  md:items-center ">
        <div className="md:translate-y-[-23%] md:translate-x-0 translate-x-[-10%] md:my-4   w-[100vw] md:w-[100%]">
            <Search />
          </div>
          <div className="md:flex md:w-[32%] w-full ">
            <Dropdown
              title="Filter"
              options={["movie", "tv"]}
              func={(elem) => setcategory(elem.target.value)}
            />
            
          </div>
        </div>
      </div>

      <InfiniteScroll
      className='mt-48'
        dataLength={popular.length}
        next={getpopular}
        hasMore={hasmore}
        loader={<h1 className="text-center pb-10">Loading...</h1>}
      >
        <Cards trending={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Popular
