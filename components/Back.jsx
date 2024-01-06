import Link from 'next/link'
import React from 'react'

const Back = ({btn}) => {
  return (
    <div className='w-full mx-auto my-8 flex items-center justify-center '>
      <Link 
        href='/'
        className={`animation-btn px-6 py-2 flex items-center justify-center ${btn} rounded-lg text-[#000] shadow-[2px_4px_0px_rgb(255,255,244)] border-2 border-[#000] font-semibold text-xl`}
      >
        Volver
      </Link>
    </div>
  )
}

export default Back