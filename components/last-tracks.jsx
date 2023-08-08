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
      <h2 className={`self-start z-10 sticky top-[80px] xl:top-[80px] lg:top-[80px] text-3xl mt-64 lg:text-3xl lg:mt-20 md:self-start md:mt-10 ml-2 md:ml-0 md:top-[84px] sm:text-2xl sm:self-center sm:top-[84px] xs:text-md xs:max-sm:top-[46px] xs:max-sm:mt-4 xs:max-sm:mb-24 xs:self-start xs:text-[1.3rem] tracking-wider text-white`}>Last tracks: </h2>
      <div className="grid relative mb-16 rounded-md text-center backdrop-blur-2xl xs:grid-cols-2 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-6 lg:mb-16 lg:grid-cols-4 lg:gap-6 lg:text-left xl:grid-cols-6 xl:gap-8 xs:max-sm:gap-6 xs:max-sm:p-4 xs:max-sm:-mt-20 xs:max-sm:mb-12">
        {tracks?.map((item) => {
          return (
            <>
            <div className="text-white rounded-md backdrop-blur-2xl p-1 pb-1 shadow hover:cursor:pointer hover:border hover:border-taupe hover:drop-shadow-xl">
              <Link 
                  href={`track-details?id=${item.spotify_id}`} onClick={() => {}} >
                  <img
                  className="rounded-md"
                  src={item.image}
                  alt="album image"
                  />
                <p className="text-xs text-center font-light tracking-wide mt-2 sm:text-center" key={item.id}>{item.title}
                 <span className="not-italic font-thin"> by {item.artist_name}</span></p>
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




/* type TracksResponse = Awaited<ReturnType<typeof getLastTracks>>
export type TracksResponseSuccess = TracksResponse['data']
export type TracksResponseError = TracksResponse['error'] */
