import { TrackInfo } from '@component/components/track-info'
//import useExternalScripts from '@component/utils/useExternalScript'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import WebPlayBackSpotify from "@component/components/web-play-back-spotify";
import Navbar from '@component/components/navbar';

const inter = Inter({ subsets: ['latin'] })


export default function TrackDetails() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>SongSeeker - track details</title>
      </Head>
      <main className="flex min-h-screen md:px-24 lg:px-28 xl:px-32 2xl:px-36 py-4 flex-col items-center xs:px-2">
      <Navbar></Navbar>
        <div className="z-10 w-full mt-20 max-w-5xl items-center justify-between font-sans text-lg sm:flex lg:flex">
            <button className="left-1 -ml-12 mt-1 mb-6 flex text-white hover:italic xs:max-sm:ml-0 xl:m-0 xl:-mt-2" type="button" onClick={() => router.back()}>
              <span className="inline-block transition-transform group hover:-translate-x-1 motion-reduce:transform-none mr-1">
              &lt;</span>{' '} Back
            </button>
        </div>
        <TrackInfo/>
        
        <WebPlayBackSpotify></WebPlayBackSpotify>
      </main>
    </>
  )
}