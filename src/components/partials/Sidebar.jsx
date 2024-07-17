import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { CiCircleRemove } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import axios from '../../Utils/axios'
function Sidebar() {
  const [show,setshow]=useState(false);
  const btn = ()=>{
    setshow(true)
  }
  const btn2 = ()=>{
    setshow(false)
  }
  return show?(
    <div  className='absolute top-0 left-0 rounded-md md:w-[20%] w-[100%] h-[100vh] border-r-[1px] border-b-[1px] border-zinc-600 z-10 bg-gradient-to-br from-[#0a0a0ad8] via-slate-700 to-[#000000d8] backdrop-blur-2xl'>
      <div className='pb-10 w-full h-10 flex justify-end pr-4 text-4xl'  onClick={btn2}><CiCircleRemove /></div >
      <div className='heading justify-start h-[10%] w-full flex md:justify-center md:items-center '>
        <h1 className='text-6xl font-black'> <i className="text-[#8644A2] text-5xl ri-tv-fill"></i> Moviie</h1>
      </div>
      <div className='w-full h-[55%] flex-col flex pl-8'>
        <h3 className='text-xl font-bold pb-4 pl-4'>
            New Feeds
        </h3 >
        <Link to="/trending" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'><i className="mr-4 ri-fire-fill"></i>Trending</Link>
        <Link to="/popular" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'><i className="mr-4 ri-sparkling-fill"></i>Popular</Link>
        <Link to="/movie" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'><i className="mr-4 ri-film-fill"></i>Movies</Link>
        <Link to="/tv" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'><i className="mr-4 ri-tv-2-line"></i>Tv Shows</Link>
        <Link to="/people" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'><i className="mr-4 ri-team-fill"></i>People</Link>
      </div>
      <hr className='w-[80%] ml-[10%] bg-zinc-800 '/>
      <div className='h-[30vh] w-[100%] flex flex-col pl-8'>
        <h3 className='text-2xl font-bold p-2 m-2 hover:bg-[#8644A2] hover:text-white rounded duration-300'>WebDetails</h3>
        <Link to="/about" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'>About</Link>
        <Link to="/contact-us" className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'>Contact Us</Link>
      </div>
    </div>
  ):<h1 onClick={btn} className='absolute pl-3 text-4xl pt-5'><FiMenu /> </h1> 
  
}
export default Sidebar
