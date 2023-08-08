
import { HomeCard } from '@component/components/card'
import SearchSong from '@component/components/search-bar'
import  LastTracks from '@component/components/last-tracks'

export default function Home() {
  
  return (
    <main className="flex min-h-screen bg-semidark-green flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-lg sm:flex md:flex lg:flex">
        <p className="fixed whitespace-pre-wrap flex left-0 top-0 w-full justify-center font-medium text-white text-5xl tracking-wider border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl md:text-white ">
          Look it up 
          <span className="flex text-xs font-light text-white">music app</span>
        </p>
      </div>
      <SearchSong />
      <div className = "bg-album-playuing z-0 top-0" style={{backgroundImage: 'url("https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundAttachment: 'fixed', height:'480px'}}>
      </div>
     {/*  <img className = "bg-album-playing bg-fixed min-h-500" src="https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{maxHeight: '100vh'}}></img> */}
      <LastTracks/>     
      <div className="mt-6 mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="/about"
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


