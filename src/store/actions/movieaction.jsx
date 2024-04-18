import { loadMovie } from "../reducers/movieslice";
export { removeMovie } from "../reducers/movieslice";
import axios from "../../Utils/axios";

export const asyncMovie = (id) => async (dispatch,getState) => {
  
  try{
     const detail=await axios.get(`movie/${id}`)
     const externalid=await axios.get(`movie/${id}/external_ids`)
     const recommendation=await axios.get(`movie/${id}/recommendations`)
     const similar=await axios.get(`movie/${id}/similar`)
     const videos=await axios.get(`movie/${id}/videos`)
     const watchproviders=await axios.get(`movie/${id}/watch/providers`)

     const moviedata = {
      detail:detail.data,
      externalid:externalid.data,
      recommendation:recommendation.data.results,
      similar:similar.data.results,
      videos:videos.data.results,
      watchproviders:watchproviders.data.results.IN,
     }
dispatch(loadMovie(moviedata));


  }catch(e){
    console.log('error :',e);
  }
}
