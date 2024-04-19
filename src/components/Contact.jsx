import React from 'react'
import ghost from '/giphy.gif'
function Contact() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col text-xl font-light'>
      under recovery
      <div className='h-40 w-40 rounded-full overflow-hidden'>
        <img src={ghost} alt="" />
      </div>
    </div>
  )
}

export default Contact
