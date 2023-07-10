import { TrackInfo } from '@component/components/track-info'
//import useExternalScripts from '@component/utils/useExternalScript'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import WebPlayBackSpotify from "@component/components/web-play-back-spotify";

const inter = Inter({ subsets: ['latin'] })


export default function TrackDetails() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Look up! - track details</title>
      </Head>
      <main className="flex min-h-screen md:px-24 lg:px-28 xl:px-32 2xl:px-36 py-4 flex-col items-center justify-between xs:px-2">
        <div className="z-10 w-full max-w-5xl mx-24 items-center justify-between font-sans text-lg sm:flex lg:flex">
            <button className="left-1 top-1 ml-2 flex text-white hover:italic mt-6" type="button" onClick={() => router.back()}>
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &lt;</span>{' '}Back
            </button>
        </div>
        <TrackInfo/>
        <div className="mb-24 grid text-center self-center lg:mt-12  lg:text-left">
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
            <p className={`max-w-[30ch] text-xs italic text-white opacity-60`}>
              This is a site about music. Look up a song or an artist you would like to listen to. See the lyrics, some info and enjoy!
            </p>
          </a>
        </div>
        <WebPlayBackSpotify></WebPlayBackSpotify>
      </main>
    </>
  )
}