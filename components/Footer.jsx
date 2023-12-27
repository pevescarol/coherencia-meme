import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center py-4 bottom-0'>
      <Link href='/' className='text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500 '>
        Volver a inicio
      </Link>
    </div>
  )
}

export default Footer