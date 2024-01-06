'use client'
import Image from "next/image";
import Link from "next/link";
import jhon from '@/public/jhon.gif'
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Home() {
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <main className="h-screen mx-auto flex flex-col items-center justify-center gap-y-6">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-64 h-64 overflow-hidden">
            <Image src={jhon} alt="travolta confused" width={200} height={300} className="object-cover w-full h-full"/>
          </div>
        </div>
      
      ): (
        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
          <div>
            <div className="mb-4 flex items-center flex-col">
              <h1 className="text-center drop-shadow-lg font-bold text-5xl md:text-6xl tracking-normal uppercase leading-[60px] text-[#fffff4]">Elige tu <br className='block md:hidden' /> <span className="text-stroke">pr<span>😜</span>pia</span> <br />aventura:</h1>
            </div>
            {/* <div className="z-1 w-[230px] absolute bg-[#d3d2ff] h-6 overflow-hidden right-[700px] top-[370px]"></div> */}
          </div>
          <Link href='/coherencia' className="animation-btn relative p-4 bg-[#d3d2ff] rounded-lg text-[#000] shadow-[4px_4px_0px_rgb(255,255,244)] border-2 border-[#000] font-semibold  text-xl appearance-none leading-7 transition-all duration-300">
            <button className="w-full h-full flex gap-3 items-center justify-center">
              Coherencia por favor <AiOutlineArrowRight />
            </button>
          </Link>

          <Link href='/meme-generator' className="animation-btn2 p-4 bg-[rgb(219,253,0)] rounded-lg text-[#000] shadow-[4px_4px_0px_rgb(255,255,244)] border-2 border-[#000] font-semibold  text-xl appearance-none leading-7 ">
            <button  className="w-full h-full flex gap-3 items-center justify-center">
              Crear meme <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      )}
    </main>
  )
}
