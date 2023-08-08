import { supabase } from '@component/utils/supabaseClient';
import  { Database }  from '@component/lib/database.types'

export default function Page ({ countries }) {
  console.log({ countries })
  return (
    <ul>
      {countries?.map((country) => (
        <li key={country.id}>{country.name}</li>
        //console.log(country.name)
        ))}
    </ul>
  );
}


export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()
  return {
    props: {
      countries: data
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