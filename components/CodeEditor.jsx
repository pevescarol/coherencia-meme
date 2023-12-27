'use client'
import React, { useState } from 'react'
import BackgroundSelector from '@/components/BackgroundSelector'
import { backgrounds } from '@/utils/utilities'
import {FiDownload, FiChevronDown} from 'react-icons/fi'

const CodeEditor = ({ onColorChange, onBackgroundChange, onSizeChange, sizeColor, exportPng }) => {
  const [background, setBackground] = useState(backgrounds[0])

  const handleColorChange = (e) => {
    const colorValue = e.target.value
    onColorChange(colorValue)
  }

  const handleSizeChange = (e) => {
    const sizeValue = e.target.value
    onSizeChange(sizeValue)
  }

  const handleBackgroundChange = (newBackground) => {
    onBackgroundChange(newBackground)
  }


  return (
    <div className='flex flex-wrap gap-6 items-center justify-center md:justify-around' >
      <div>
        <p className='py-1 text-sm font-medium'>Tamaño</p>
        <div className='flex items-center justify-center'>
          <input type="number" value={sizeColor} onChange={handleSizeChange} />   
        </div>
      </div>

      <BackgroundSelector background={background} setBackground={handleBackgroundChange} />

      <div className='flex items-center flex-col justify-center'>
        <p className='py-1 text-sm font-medium'>Color de texto</p>
        <div className='flex items-center justify-center dropdown-title'>
          <input type="color" onChange={handleColorChange} />   
          <FiChevronDown />
        </div>
      </div>

      <div className="">
        <button 
          className='flex items-center gap-2 py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'
          onClick={exportPng}
        >
          Exportar PNG
          <FiDownload />
        </button>
      </div>

    </div>
  )
}

export default CodeEditor