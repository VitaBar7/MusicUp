
import Head from 'next/head'
import Navbar from '../components/navbar'
import SearchSong from '@component/components/search-bar'
import  LastTracks from '@component/components/last-tracks'
import AboutThis from '../components/about-this'
import WebPlayBackSpotify from "@component/components/web-play-back-spotify";
import { useContext } from 'react'
import { WebPlayBackContext } from '@component/context'

export default function Home() {
  const { current_track, player} = useContext(WebPlayBackContext)
  return (
    <>
    <Head>
        <title>songSeeker</title>
    </Head>
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-20 px-24 sm:px-8 xs:max-sm:px-4 xs:max-sm:w-full">
      <Navbar></Navbar>
      <div className = "bg-album-playing absolute z-0 top-0 bg-fixed bg-no-repeat bg-cover w-full" style={{height:'100vh', minWidth:'100vw'}}>
      </div> 
      <SearchSong />
      
      {(current_track && player) ? 
      <div className="w-3/4 self-start xs:max-sm:w-3/4 xs:max-sm:-mt-28 xs:max-sm:self-center xs:max-sm:mb-6">
        <WebPlayBackSpotify></WebPlayBackSpotify>
      </div>
      :
      <AboutThis/>}
      <LastTracks/> 
     { current_track && player && <WebPlayBackSpotify/>}
      
    </main>
    </>
  )
}


