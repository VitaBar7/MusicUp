import { supabase } from '@component/utils/supabaseClient';
import { useState, useEffect } from 'react';
import Link from 'next/link'


export default function LastTracks () {
  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    getServerSideProps().then((last_tracks)=> setTracks(last_tracks.props.search)) 
  }, [])

  console.log({ tracks })
  return (
    <>
      <h2 className={`self-start mt-10 ml-2 mb-6 tracking-wider text-2xl text-white`}>Last tracks </h2>
      <div className="flex mb-15 grid text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:grid-cols-4 lg:gap-8 lg:text-left">
        {tracks?.map((item) => {
          return (
            <>
            <div className=" bg-black text-white rounded-sm p-1 px-4 shadow hover:drop-shadow-[0_0_0.3rem_#000000]">
              <Link 
                  href={`track-details?id=${item.spotify_id}`} onClick={() => {}} >
                  <img
                  className="rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  src={item.image}
                  alt="album image"
                  />
                <p className="text-xs italic mb-4 mt-2" key={item.id}>{item.title}
                 {/* <span className="not-italic">by {item.artist_name}</span> */}</p>
              </Link>
              

            </div>
            </>
          //console.log(item.title)
          )})}
      </div>
    </>
  );
}


export async function getServerSideProps() {
  let { data } = await supabase
    .from('last_tracks')
    .select()
    .order('id', { ascending: false })
    .limit(24)

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
