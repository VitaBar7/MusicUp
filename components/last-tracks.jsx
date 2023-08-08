import { supabase } from '@component/utils/supabaseClient';
import  { Database }  from '@component/lib/database.types'

export default function getLastTracks ({ search }) {
  console.log({ search })
  return (
    <ul>
      {search?.map((item) => (
        <li key={item.id}>{item.title}</li>
        //console.log(country.name)
        ))}
    </ul>
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
