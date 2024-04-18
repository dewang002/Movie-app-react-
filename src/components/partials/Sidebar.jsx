import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../Utils/axios'
function Sidebar() {

  return (
    <div className='w-[20%] min-h-screen border-r-[1px] border-zinc-600 '>
      <div className='heading h-[10%] w-full flex justify-center items-center '>
        <h1 className='text-6xl font-black '> <i className="text-[#8644A2] text-5xl ri-tv-fill"></i> Moviie</h1>
      </div>
      <div className='w-full h-[50%] flex-col flex pl-8'>
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
      <div className='h-[40%] w-[100%] flex flex-col pl-8'>
        <h3 className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'>WebDetails</h3>
        <Link className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'>About</Link>
        <Link className='text-2xl p-2 m-2 hover:bg-[#8644A2] hover:text-white text-zinc-400 rounded duration-300'>Contact Us</Link>
      </div>
    </div>
  )
  
}
export default Sidebar
