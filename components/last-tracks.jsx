import { supabase } from '@component/utils/supabaseClient';
import  { Database }  from '@component/lib/database.types'

export default function GetLastTracks ({ search }) {
  console.log({ search })
  return (
    <div>
      {search?.map((item) => {
        return (
          <>
          <img src={item.image}/>
          <p key={item.id}>{item.title}</p>
          </>
        //console.log(item.title)
        )})}
    </div>
  );
}


export async function getServerSideProps() {
  let { data } = await supabase.from('search').select()
  return {
    props: {
      search: data
    },
  }
}




/* export async function getMovies() {
  return await supabase.from('movies').select(`id, title`)
}
 */

/* type TracksResponse = Awaited<ReturnType<typeof getLastTracks>>
export type TracksResponseSuccess = TracksResponse['data']
export type TracksResponseError = TracksResponse['error'] */
