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
      <h2 className={`self-start z-10 sticky top-10 text-3xl mt-20 lg:text-3xl lg:mt-20 md:mt-10 ml-2 md:ml-0 md:top-20 sm:text-2xl xs:text-md xs:top-24 xs:-mt-40 xs:-ml-20 mb-6 tracking-wider text-white`}>Last tracks: </h2>
      <div className="flex mb-15 mt-6 grid text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:mt-10 lg:grid-cols-4 lg:gap-6 lg:text-left xl:grid-cols-6 xl:gap-8 ">
        {tracks?.map((item) => {
          return (
            <>
            <div className=" bg-black text-white rounded-md p-1 pb-6 shadow hover:cursor:pointer hover:border hover:border-dark-grey hover:drop-shadow-xl">
              <Link 
                  href={`track-details?id=${item.spotify_id}`} onClick={() => {}} >
                  <img
                  className="rounded-md"
                  src={item.image}
                  alt="album image"
                  />
                <p className="text-xs text-center text-thin tracking-wide mb4 mt-2 sm:text-center" key={item.id}>{item.title}
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
