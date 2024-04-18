import React from 'react'
import notfound from '/giphy.gif'
function Notfound() {
  return (
   
       <div className='flex items-start justify-center h-screen w-full bg-zinc-800'>
      <img className='bg-white w-80 rounded-full mt-60' src={notfound} alt="" />
    </div>
    
  )
}

export default Notfound
