import Image from "next/image";
import Link from "next/link";
import jhon from '@/public/jhon.gif'

export default function Home() {
  return (
    <main className="h-screen mx-auto flex flex-col items-center justify-center gap-y-6">
      <div className="w-64 h-64 overflow-hidden -mb-6 ">
        <Image src={jhon} alt="travolta confused" width={200} height={300} className="object-cover w-full h-full"/>
      </div>
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
    </main>
  )
}
