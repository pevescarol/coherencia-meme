import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'

const MemeEditor = ({ onImageSelect, onTopTextChange, onBottomTextChange, sizeText, onSizeChange, exportPng, onAspectChange  }) => {

  const handleSizeChange = (e) => {
    const sizeValue = e.target.value
    onSizeChange(sizeValue)
  }
  
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    onImageSelect(selectedImage)
  }

  const handleTopTextChange= (e) => {
    const text = e.target.value
    onTopTextChange(text)
  }

  const handleBottomTextChange= (e) => {
    const text = e.target.value
    onBottomTextChange(text)
  }

  return (
    <div className="mt-6 w-full lg:w-[940px] p-5 bg-[#191919] z-10 rounded border border-[#3c3c3c] shadow-md flex flex-col gap-y-6">
      <div className='flex flex-wrap gap-3 items-center justify-around'>

        <div>
          <p className='py-1 text-sm font-medium'>Tamaño</p>
          <div className='flex items-center justify-center'>
            <input type="number" value={sizeText} onChange={handleSizeChange} />   
          </div>
        </div>

        <div>
          <button
            onClick={() => onAspectChange('aspect-square')}
            className='py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'>
            1:1
          </button>
          <button
            onClick={() => onAspectChange('aspect-auto')}
            className='py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'>
            9:16
          </button>
        </div>


      </div>

      <div className='flex flex-row flex-wrap gap-6 items-center justify-center'>
        <div className='flex flex-col'>
          <label className='py-1 text-sm font-medium'>Texto de arriba</label>
          <input type="text" onChange={handleTopTextChange}  className='bg-transparent border-b text-white' />
        </div>

        <div className='flex flex-col'>
          <label className='py-1 text-sm font-medium'>Texto de abajo</label>
          <input type="text" onChange={handleBottomTextChange} className='bg-transparent border-b text-white' />
        </div>

        <div className='flex md:flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='input-file' className='text-sm rounded-md font-medium bg-blue-400 text-slate-50'>Subir imagen</label>
            <input id='input-file' type="file" onChange={handleImageChange} accept='image/' className='input-file' />
          </div>

          <button 
            className='flex items-center gap-2 py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'
            onClick={exportPng}
          >
            Exportar PNG
            <FiDownload />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemeEditor