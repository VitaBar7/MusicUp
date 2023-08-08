
import Head from 'next/head'
import Navbar from '../components/navbar'
import SearchSong from '@component/components/search-bar'
import  LastTracks from '@component/components/last-tracks'
import  MoodOptions  from '@component/components/mood-options'
import AboutThis from '../components/about-this'
import WebPlayBackSpotify from "@component/components/web-play-back-spotify";

export default function Home() {
  
  return (
    <>
    <Head>
        <title>Look up!</title>
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-24 sm:px-8 xs:max-sm:px-4 xs:max-sm:w-full">
      <Navbar></Navbar>
      <div className = "bg-album-playing absolute z-0 top-0 bg-fixed bg-no-repeat bg-cover w-full" style={{height:'100vh'}}>
      </div> 
      <SearchSong />
      <MoodOptions/>
      <AboutThis/>
      <LastTracks/> 
      <WebPlayBackSpotify></WebPlayBackSpotify>
      
    </main>
    </>
  )
}


