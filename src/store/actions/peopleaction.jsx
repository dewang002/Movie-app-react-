import { loadPeople } from "../reducers/peopleslice";
export { removePeople } from "../reducers/peopleslice";
import axios from "../../Utils/axios";

export const asyncpeople = (id) => async (dispatch,getState) => {
  
  try{
     const detail=await axios.get(`people/${id}`)
     const externalid=await axios.get(`people/${id}/external_ids`)
     
     const peopledata = {
      detail:detail.data,
      externalid:externalid.data,
     }
dispatch(loadPeople(peopledata));


  }catch(e){
    console.log('error :',e);
  }
}
