import React, { useState } from 'react'
import { backgrounds } from '@/utils/utilities'
import {FiChevronDown} from 'react-icons/fi'

const BackgroundSelector = ({ background, setBackground}) => {

  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedBg, setSelectedBg] = useState(background)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleBackgroundChange = (newBackground) => {
    setSelectedBg(newBackground)
    setBackground(newBackground)
  }

  return (
    <div className='flex items-center flex-col justify-center relative' onClick={toggleDropdown}>
      <p className='py-1 text-sm font-medium'>Color de fondo</p>
      <div className='flex items-center justify-center dropdown-title'>
        <div 
          className='rounded-full w-[20px] h-[20px] '
          style={{background: selectedBg}}
        ></div>
        <FiChevronDown />
      </div>
      {showDropdown && (
        <div className='dropdown-menu top-[74px] w-[62px] rounded-full flex items-center justify-center py-2 flex-col gap-2'>
          {backgrounds.map((bg, i) => {
            return (
              <div 
                key={i} 
                onClick={() => handleBackgroundChange(bg)}
                className='w-[20px] h-[20px] rounded-full cursor-pointer '
                style={{background: bg}}
              ></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default BackgroundSelector