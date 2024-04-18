import axios from '../../Utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimg from '/noimg.png'
function Search() {
    const [query,setquery]=useState("")
    const [search,setsearch]=useState([])

    async function getSearch(){
      try{
     const {data} = await axios.get(`search/multi?query=${query}`)
     setsearch(data.results)
     }catch(error){
        console.log(error)
     }}

     useEffect(()=>{
      getSearch()
     },[query])

  return (
    <div className=' flex justify-center items-center ml-[20vh] mt-6 w-[60%] '>
        <i className="ri-search-2-line text-4xl"></i>
      <input onChange={e=>setquery(e.target.value)} value={query} type="text" placeholder='  search...' className='w-[68%] h-10 text-xl mx-10  border-none bg-zinc-700 outline-none rounded-full' /> 
      <i onClick={()=>setquery("")} className="ri-twitter-x-fill text-2xl "></i>
      <div className='max-h-[50vh] w-[50%] absolute top-[8.9%] bg-zinc-800 rounded overflow-x-auto z-10'>
{search.map((item,index)=>{
   return <Link key={index} to={`/${item.media_type || title}/details/${item.id}`} className='h-28 w-[100%]  flex items-center gap-20 pl-10 text-2xl border-2 border-zinc-800 rounded'> 
        <img className='h-[100%] object-cover ' src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.profile_path || item.backdrop_path }`: noimg} alt="" />
        <span>{item.title || item.original_name}</span>
        </Link>
})}

      </div>
     
    </div>
  )
}

export default Search
