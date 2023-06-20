import { supabase } from '@component/utils/supabaseClient';
//import  { Database }  from '@component/lib/database.types'
import  MoodOptions  from '@component/components/mood-options';
import { useState } from "react"


export default function selectMood () {
  const [playlist, setPlaylist] = useState([])
  return (
    <MoodOptions/>
  )
 
}

//<h1>your mood is {mood}, this is your playlist for today:<h1>
    {/* <div key={playlist.id}>
      <img className="rounded-full" src={playlist.image} alt={`playlist ${playlist.id}`} style={{ width:"100", height:"100"}}/>
      <p className='font-mono tracking-wide text-sm italic'>
      playlist id: {playlist.spotify_id}, the mood is: {playlist.mood}
      </p>
    </div>
 */}
export async function showPlaylist() {
  let { data } = await supabase
    .from('playlists')
    .eq('mood' , {mood})
    .select(spotify_id)
  return {
    props: {
      playlists: data
    },
  }
}




 /* return (
    <>
      <h1 className="text-2xl m-10">How is your mood today?</h1>
      <div className="bg-black text-white">
        {playlists?.map((playlist) => (
          <div key={playlist.id}>
            <img className="rounded-full" src={playlist.image} alt={`playlist ${playlist.id}`} style={{ width:"100", height:"100"}}/>
            <p className='font-mono tracking-wide text-sm italic'>
            playlist id: {playlist.spotify_id}, the mood is: {playlist.mood}
            </p>
          </div>
          
          ))}
      </div>
    </>
  ); */

 

/* export async function getMovies() {
  return await supabase.from('movies').select(`id, title`)
}

type MoviesResponse = Awaited<ReturnType<typeof getMovies>>
export type MoviesResponseSuccess = MoviesResponse['data']
export type MoviesResponseError = MoviesResponse['error']
 */