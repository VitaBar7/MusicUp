import { supabase } from '@component/utils/supabaseClient';
import  { Database }  from '@component/lib/database.types'


export default function Page ({ playlists }) {
  console.log({ playlists })
  return (
    <div>
      {playlists?.map((playlist) => (
        <div key={playlist.id}>
          <img src={playlist.image} alt={`playlist ${playlist.id}`} style={{ width:"100", height:"100"}}/>
          <p>
          your playlist for today id: {playlist.spotify_id}, the mood is: {playlist.mood}
          </p>
        </div>
        
        //console.log(country.name)
        ))}
    </div>
  );
}

/* const { error } = await supabase
  .from('search')
  .insert({ spotify_id: {trackId}})
 */

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