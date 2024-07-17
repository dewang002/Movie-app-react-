import React, { useEffect, useState } from "react";
import Search from "./partials/Search";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import axios from "../Utils/axios";
import Trendingcard from "./partials/Trendingcard";
import Dropdown from "./partials/Dropdown";
import Popular from "./Popular";

function Home() {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("movie");

  async function getimg() {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomimg = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomimg);
    } catch (error) {
      console.log(error);
    }
  }

  async function gettrend() {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("error:", error.response);
    }
  }

  useEffect(() => {
    gettrend();
    !wallpaper && getimg();
  }, [category]);

  return (
    <>
      <Sidebar />
      <div className="w-[80%] mx-auto  min-h-[100%] flex flex-col">
        <Search />
        <Header data={wallpaper} />
        <Dropdown
          title="Filter"
          options={["movie", "tv", "all"]}
          func={(elem) => setcategory(elem.target.value)}
        />
        <Trendingcard trend={trending} category={category} />
      </div>
    </>
  );
}

export default Home;
