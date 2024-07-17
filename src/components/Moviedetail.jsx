import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncMovie, removeMovie } from "../store/actions/movieaction";
import Loader from "./Loader";
import Trendingcard from "./partials/Trendingcard";

function Moviedetail() {
  const {pathname}= useLocation()
  const navigate = useNavigate();
  const { id } = useParams();

  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asyncMovie(id));
   
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  return info && info.detail  ? (
  
    <div className="md:min-h-[100vh] h-[180vh] w-screen bg-zinc-800 mb-[8%]">
      <img
        className="relative md:h-[72%] h-[69%] w-full object-cover object-top opacity-50 blur-sm"
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

      <div className=" md:h-[37vh] md:gap-8 flex flex-col md:flex-row w-[80%] absolute left-[12vw] md:left-[18vw] top-[14vh]  ">
       
        <img
          className="h-[37vh] md:w-[13vw] object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
          alt=""
        />
        <h1 className=" text-white font-bold text-2xl md:text-5xl ">
          {info.detail.original_title}
        </h1>{" "}
        <span className="text-lg  font-semibold translate-y-[2vh] md:translate-x-[-3vh] ">
          ({info.detail.release_date.split("-")[0]})
        </span>

        <div className="text-zinc-100 text-2xl font-black absolute h-12 w-12 bg-yellow-500 rounded-full flex justify-center items-center md:translate-y-[4vw] translate-y-[64vw] md:translate-x-[15vw]">
          {Math.floor(info.detail.vote_average * 10)}{" "}
          <span className="text-sm">%</span>
        </div>
        
        <div className="absolute w-32 md:w-[50%] md:translate-y-[4.5vw] translate-y-[116vw] translate-x-[48vw] md:translate-x-[18vw] md:flex gap-10">
         <h1 className="hidden md:block text-xl font-bold">User Score</h1>
          <h1 className="text-base md:text-xl font-light">Type : {info.detail.genres.map((elem) => elem.name).join(" , ")}</h1>
          <h1 className="text-white text-xl font-light">duration : {info.detail.runtime} min's</h1>
        </div>
      
      <div className="title-two  h-[21vh] gap-2  md:flex flex-col w-[80%]  absolute left-[15vw] md:top-[16vh] top-[80vh]  ">
      <h1 className="italic font-semibold mb-3 text-3xl">{info.detail.tagline}</h1>
       <Link className="px-10 py-2  bg-sky-600 w-40 rounded" key={info.id}  to={`/movie/details/${id}/trailer`} >Play Trailer </Link>
     {console.log(pathname)}
      <h1 className="hidden italic font-semibold mt-5 md:mt-0 md:text-3xl">OverView</h1>
      <p className="hidden md:block italic font-light text-lg w-[70%]">{info.detail.overview}</p>
      </div>

      </div>

      <div className="absolute top-[64vh] md:top-[52vh] left-[14vw] md:left-[18vw] mt-10 gap-8 w-[80%]">
        {/* platform 1-----------------------------------------------------------------------------------------------------     */}

        <div className="w-[50%]  flex md:items-center gap-2 mb-2">
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
            <h2 className="text-lg font-bold w-20">Buy : </h2>
          ) : (
            <h1 className="text-lg">Buy : NaN</h1>
          )}
          {info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="rounded-[20px] w-8 md:w-12"
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
                className="rounded-[20px] w-5  md:w-12"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
      
        </div>
      </div>
     
      <hr className="pb-4"/>  
    <h1 className="text-4xl font-semibold pb-2 pl-4 ">You may also like</h1>
      <Trendingcard trend={ info.recommendation.length > 0 ? info.recommendation : info.similar } />
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default Moviedetail;
