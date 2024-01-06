'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import imgDefault from '@/public/butterfly.jpg'

// eslint-disable-next-line react/display-name
const MemeCanva = React.forwardRef(({ image, topText, bottomText, sizeText, aspectRatio }, ref) => {

  const renderImage = () => {
    const imageSource = image ? URL.createObjectURL(image) : imgDefault;

    return (
      <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-hidden" ref={ref}>
        <Image
          src={imageSource}
          alt="meme generator"
          width={400}
          height={400}
          className={`object-cover ${aspectRatio}`}
        />
        <div className="absolute top-5 w-[80%] text-center my-4 px-1 ">
          <p style={{ fontSize: `${sizeText}px`}} className="text-2xl uppercase text-drop text-white font-bold">
            {topText}
          </p>
        </div>
        <div className="absolute bottom-5 left-0 w-full text-center">
          <p style={{ fontSize: `${sizeText}px`}} className="text-2xl text-white text-drop uppercase font-bold ">
            {bottomText}
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-full h-full mt-8 mb-12" >
      {renderImage()}
    </div>
  );
})

export default MemeCanva;
