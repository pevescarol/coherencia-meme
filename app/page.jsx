'use client'
import Image from "next/image";
import Link from "next/link";
import jhon from '@/public/jhon.gif'
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  return (
    <main className="h-screen mx-auto flex flex-col items-center justify-center gap-y-6">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-64 h-64 overflow-hidden">
            <Image src={jhon} alt="travolta confused" width={200} height={300} className="object-cover w-full h-full"/>
          </div>
          <p className="text-2xl text-gray-400 mt-4 -ml-6">Cargando...</p>
        </div>
      
      ): (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4">
          <button className="p-4 bg-indigo-700 rounded-lg text-white font-bold text-xl">
            <Link href='/coherencia'>
              Coherencia por favor
            </Link>
          </button>

          <button className="p-4 bg-teal-600 rounded-lg text-white font-bold  text-xl">
            <Link href='/meme-generator'>
              Crear meme
            </Link>
          </button>
        </div>
      )}
    </main>
  )
}
