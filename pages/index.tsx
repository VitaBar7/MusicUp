import SearchSong from '@component/components/search-bar'
import  LastTracks from '@component/components/last-tracks'
import Image from 'next/image'
import  MoodOptions  from '@component/components/mood-options'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-24">
      <div className="z-10 w-full h-48 max-w-5xl items-center justify-between font-sans text-lg sm:flex md:flex lg:flex">
        <p className="fixed whitespace-pre-wrap flex left-0 top-0 w-full justify-center font-medium text-white text-5xl tracking-wider border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl md:text-white ">
          Look up! 
          <span className="flex text-xs font-light text-white">music app</span>
        </p>
      </div>
      <SearchSong />
      
      <div className = "bg-album-playing absolute z-0 top-0 bg-fixed bg-no-repeat bg-cover w-full" style={{height:'100vh'}}>
        <MoodOptions/>
      </div>
     {/*  <Image className = "z-0 bg-fixed bg-album-playing object-contain" src="" fill alt="" /> */}
      <LastTracks/>     
      <div className="mt-16 mb-20 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent mx-1 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-white`}>
            About this{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs italic text-white opacity-60`}>
            This is a site about music. Look up a song or an artist you would like to listen to. See the lyrics, some info and enjoy!
          </p>
        </a>
      </div>
    </main>
  )
}


