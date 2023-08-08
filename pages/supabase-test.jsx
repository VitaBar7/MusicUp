import { supabase } from '@component/utils/supabaseClient';
import  { Database }  from '@component/lib/database.types'


export default function Page ({ playlists }) {
  console.log({ playlists })
  return (
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
  );
}



export async function getServerSideProps() {
  let { data } = await supabase
    .from("playlists")
    .select()
  return {
    props: {
      playlists: data
    },
  }
}




/* export async function getMovies() {
  return await supabase.from('movies').select(`id, title`)
}

type MoviesResponse = Awaited<ReturnType<typeof getMovies>>
export type MoviesResponseSuccess = MoviesResponse['data']
export type MoviesResponseError = MoviesResponse['error']
 */