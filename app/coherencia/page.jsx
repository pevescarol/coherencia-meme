'use client'
import CodeEditor from '@/components/CodeEditor'
import CoherenceCanva from '@/components/CoherenceCanva'
import { backgrounds } from '@/utils/utilities'
import { useState, useRef } from 'react'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'

const CoherencePage = () => {

  const [sizeColor, setSizeColor] = useState(43)
  const [textColor, setTextColor] = useState('#000')
  const [bgColor, setBgColor] = useState(backgrounds[0])

  const editorRef = useRef(null)

  const handleColorChange = (newColor) => {
    setTextColor(newColor)
  }

  const handleSizeChange = (newSize) => {
    setSizeColor(newSize)
  }

  const handleBgColorChange = (newBgColor) => {
    setBgColor(newBgColor)
  }

  const exportPng = () => {
    if(editorRef.current) {
      htmlToImage.toPng(editorRef.current).then((dataUrl) => {
        download(dataUrl, 'coherenciaplease.png')
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
  }

  return (
    <section className="h-screen w-full flex flex-col items-center m-auto justify-start">
      <div className="mt-6 w-full lg:w-[940px] p-5 bg-[#191919] z-10 rounded border border-[#3c3c3c] shadow-md">
        <CodeEditor 
          onColorChange={handleColorChange} 
          onBackgroundChange={handleBgColorChange} 
          onSizeChange={handleSizeChange} 
          sizeColor={sizeColor}
          exportPng={exportPng}
        />
      </div>

      <div className='mt-[4rem]'>
        <CoherenceCanva 
          textColor={textColor} 
          bgColor={bgColor} 
          textSize={sizeColor} 
          ref={editorRef}
        />
      </div>
    </section>
  )
}

export default CoherencePage