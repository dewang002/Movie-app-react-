import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import {asynctv,removetv} from "../store/actions/tvaction"
import Loader from "./Loader";
import Trendingcard from "./partials/Trendingcard";
import noimg from "/noimg.png";

function Tvshowsdetail() {
  const {pathname}= useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();


  


  useEffect(() => {
    dispatch(asynctv(id));
   
    return () => {
      dispatch(removetv());
    };
  }, [id]);


  return info && info.detail  ? (
    <div className="min-h-screen w-screen bg-zinc-800 mb-[7.8%]">
      <img
        className="relative h-[72%] w-full  object-cover object-top opacity-50 blur-sm"
        src={`https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.profile_path
        }`}
        alt=""
      />
      
      <nav className="absolute top-4 left-[11vw] flex gap-8 items-center">
        <Link
          onClick={() => navigate(-1)}
          to=""
          className=" ri-arrow-left-line hover:text-purple-400 text-xl duration-300"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-line text-zinc-100 text-xl hover:text-purple-500 duration-300"></i>
        </a>
        <a  href='/Movie-app-react-/'>
          <i class="ri-home-5-line text-zinc-100 text-xl hover:text-purple-500 duration-300"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-global-line text-zinc-100 text-xl hover:text-purple-500 duration-300"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          className="font-black text-xl text-zinc-100 hover:text-purple-500 duration-300"
        >
          imdb
        </a>
      </nav>
      {/* ______________ ________________ ________________ ________________ _______________ _____________ */}

      <div className=" h-[80vh] gap-8 flex  w-[80%] absolute left-[18vw] top-[14vh]  ">
       
        <img
          className="h-[37vh] w-[13vw] object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
          alt=""
        />
        <h1 className=" text-white font-bold text-5xl ">
          {info.detail.original_title}
        </h1>{" "}
        <span className="text-lg font-semibold translate-y-[2vh] translate-x-[-3vh] ">
          ({info.detail.last_air_date.split("-")[0]})
        </span>

        <div className="text-zinc-100 text-2xl font-black absolute h-12 w-12 bg-yellow-500 rounded-full flex justify-center items-center translate-y-[4vw] translate-x-[15vw]">
          {Math.floor(info.detail.vote_average * 10)}{" "}
          <span className="text-sm">%</span>
        </div>
        
        <div className="absolute translate-y-[4.5vw] translate-x-[18vw] flex gap-10">
         <h1 className="text-xl font-bold">User Score</h1> <h1 className="text-xl font-light">Type : {info.detail.genres.map((elem) => elem.name).join(" , ")}</h1>
          <h1 className="text-white text-xl font-light">duration : {info.detail.runtime} min's</h1>
        </div>
      
      <div className="title-two  h-[60vh] gap-2  flex flex-col w-[80%]  absolute left-[15vw] top-[16vh]  ">
      <h1 className="italic font-semibold mb-3 text-3xl">{info.detail.tagline}</h1>
       <Link className="px-10 py-2  bg-sky-600 w-40 rounded" key={info.id}  to={`/tv/details/${id}/trailer`} >Play Trailer </Link>
   
      <h1 className="italic font-semibold text-3xl">OverView</h1>
      <p className="italic font-light text-lg w-[70%]">{info.detail.overview.slice(0,250)} ...</p>

{/* here to put seasons */}
    <h1 className="text-xl font-light font-[montreal] tracking-[2px]">Seasons</h1> 
<div className=" w-[100%] flex  overflow-x-auto  gap-4 overflow-y-hidden">
     

     {(info.detail.seasons.map((elem,index)=>{
       return <div  className=" ">
      {elem.poster_path ?  <img className=" rounded min-w-[10vw] h-[30vh] object-cover object-center" src={`https://image.tmdb.org/t/p/original/${elem.poster_path  }`} alt="" /> : <img src={noimg} />  }
        
       
      
     </div>
     
   }))}
     
   </div>
     
      </div>

      </div>

      <div className="absolute top-[52vh] left-[18vw] mt-10 gap-8 w-[80%]">
        {/* platform 1-----------------------------------------------------------------------------------------------------     */}

        <div className="w-[50%]  flex items-center gap-2 mb-2">
          {info.watchproviders && info.watchproviders.rent ? (
            <h2 className="text-lg font-bold w-20">Rent </h2>
          ) : (
            <h1 className="text-lg">Rent : NaN</h1>
          )}
          {info.watchproviders &&
            info.watchproviders.rent &&
            info.watchproviders.rent.map((w) => (
              <img
                title={w.provider_name}
                className="rounded-[20px]  w-12"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
        </div>

        {/* platform 2-----------------------------------------------------------------------------------------------------      */}

        <div className="w-[50%]  flex items-center gap-2 mb-2">
          {info.watchproviders && info.watchproviders.buy ? (
            <h2 className="text-lg font-bold w-20">Buy </h2>
          ) : (
            <h1 className="text-lg">Buy : NaN</h1>
          )}
          {info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="rounded-[20px]  w-12"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
        </div>

        {/* platform 3----------------------------------------------------------------------------------------------------- */}

        <div className="w-[50%] h-[10%]  flex items-center gap-2  pb-10">
          {info.watchproviders && info.watchproviders.flatrate ? (
            <h2 className="text-lg font-bold w-20">Flatrate </h2>
          ) : (
            <h1 className="text-lg">Flatrate : NaN</h1>
          )}
          {info.watchproviders &&
            info.watchproviders.flatrate &&
            info.watchproviders.flatrate.map((w) => (
              <img
                title={w.provider_name}
                className="rounded-[20px]  w-12"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
      
        </div>
      </div>
     
      <hr className="pb-4"/>  
    <h1 className="text-4xl font-semibold pb-2 pl-4">You may also like</h1>
      <Trendingcard trend={ info.recommendation.length > 0 ? info.recommendation : info.similar } />
     
       

      <Outlet />
    </div>
     
  ) : (
    <Loader />
  );
}

export default Tvshowsdetail
