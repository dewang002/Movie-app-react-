import React from 'react'
import loading from '/load.png'
function Loader() {
  return (
    <div className='flex items-start justify-center h-screen w-full'>
      <img className='bg-white w-10 rounded-full mt-60' src={loading} alt="" />
    </div>
  )
}

export default Loader
