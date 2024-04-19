import {loadtv} from "../reducers/tvslice";
export {removetv} from "../reducers/tvslice";
import axios from "../../Utils/axios"

export const asynctv = (id) => async (dispatch,getState) => {
  
    try{
       const detail=await axios.get(`tv/${id}`)
       const externalid=await axios.get(`tv/${id}/external_ids`)
       const recommendation=await axios.get(`tv/${id}/recommendations`)
       const similar=await axios.get(`tv/${id}/similar`)
       const videos=await axios.get(`tv/${id}/videos`)
       const watchproviders=await axios.get(`tv/${id}/watch/providers`)
  
       const tvdata = {
        detail:detail.data,
        externalid:externalid.data,
        recommendation:recommendation.data.results,
        similar:similar.data.results,
        videos:videos.data.results,
        watchproviders:watchproviders.data.results.IN,
       }
  dispatch(loadtv(tvdata));
  
  
    }catch(e){
      console.log('error :',e);
    }
  }
  