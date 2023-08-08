
import { HomeCard } from '@component/components/card'
import SearchSong from '@component/components/search-bar'


export default function Home() {
  
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-lg sm:flex md:flex lg:flex">
        <p className="fixed whitespace-pre-wrap flex left-0 top-0 w-full justify-center font-medium text-white text-5xl tracking-wider border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:text-white ">
          Look it up 
          <span className="flex text-xs font-light text-white">music app</span>
        </p>
        
      </div>
      <SearchSong />
      <HomeCard />      
      <div className="mt-6 mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href=""
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </a>
      </div>
    </main>
  )
}


