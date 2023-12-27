'use client'
import MemeCanva from '@/components/MemeCanva'
import MemeEditor from '@/components/MemeEditor'
import React, { useRef, useState } from 'react'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'

const GeneratorPage = () => {
  const editorRef = useRef(null)

  const [aspect, setAspect] = useState('aspect-auto')
  const [sizeText, setSizeText] = useState(30)

  const [selectedImage, setSelectedImage] = useState(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  const handleSizeChange = (newSize) => {
    setSizeText(newSize)
  }

  const handleImageSelect = (image) => {
    setSelectedImage(image)
  }

  const handleTopTextChange = (text) => {
    setTopText(text)
  }

  const handleBottomTextChange = (text) => {
    setBottomText(text)
  }

  const handleAspectChange = (newAspect) => {
    setAspect(newAspect)
  }

  const exportPng = () => {
    if(editorRef.current) {
      htmlToImage.toPng(editorRef.current).then((dataUrl) => {
        download(dataUrl, 'meme.png')
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
  }


  return (
    <section className="h-screen w-full flex flex-col items-center">
      <MemeEditor 
        onImageSelect={handleImageSelect}
        onTopTextChange={handleTopTextChange}
        onBottomTextChange={handleBottomTextChange}
        onSizeChange={handleSizeChange} 
        sizeText={sizeText}
        exportPng={exportPng}
        onAspectChange={handleAspectChange}
      />
      <MemeCanva
        image={selectedImage}
        topText={topText}
        bottomText={bottomText}
        sizeText={sizeText}
        ref={editorRef}
        aspectRatio={aspect}
      />
    </section>
  )
}

export default GeneratorPage