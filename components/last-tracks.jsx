import { supabase } from '@component/utils/supabaseClient';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { AuthContext } from '@component/context'


export default function LastTracks () {
  const [tracks, setTracks] = useState(null)
  const [userTracks, setUserTracks] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const { userId, userAccessToken, isUserAuthenticated} = useContext(AuthContext)


  useEffect(()=> {
    console.log(userTracks)
  }, [userId])

  useEffect(() => {
    getLastTracks()
    .then((last_tracks)=> setTracks(last_tracks.props.search))
    

  }, [])
  console.log({ tracks })

  useEffect(() => {
    async function getUserTracks(userId) {
      const { data, error } = await supabase
      .from('last_tracks')
      .select()
      .eq('user_id', userId)
      .order('id', { ascending: false })
      .limit(24)
    
      if(error) {
        setFetcherror('No tracks here yet')
        setUserTracks(null)
        console.log(error)
      }
      if(data && userAccessToken) {
        setUserTracks(data)
        setFetchError(null)
      }
    }

    getUserTracks(userId) 
  }, [userId])


  async function getLastTracks() {
    const { data, error } = await supabase
      .from('last_tracks')
      .select()
      .order('id', { ascending: false })
      .limit(30)
  
    return {
      props: {
        search: data
      },
    }
    
  }
  
  

  return (
    <>
        {fetchError && (<p>{fetchError}</p>)}
        {(userTracks!==null && isUserAuthenticated)? (
          
          <h2 className="self-start backdrop-blur-2xl z-10 xl:top-[80px] lg:top-[80px] text-xl mt-6 pl-2 lg:text-xl lg:mt- md:self-start md:mt-10 ml-2 md:ml-0 md:top-[84px] sm:text-2xl sm:self-center sm:top-[84px] xs:text-md xs:max-sm:top-[46px] xs:max-sm:mt-4 xs:max-sm:mb-24 xs:self-start xs:text-[1.3rem] tracking-wider text-white">Recently viewed by you:</h2> )&&
          (<div className = "user-tracks grid relative rounded-md mt-10 text-center backdrop-blur-2xl xs:grid-cols-2 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-6  lg:grid-cols-5 lg:gap-6 lg:text-left xl:grid-cols-6 xl:gap-8 xs:max-sm:gap-6 xs:max-sm:p-4 xs:max-sm:-mt-20 xs:max-sm:mb-12">
            {userTracks.map((item) => {
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
              )
            })}

          </div>
        ):null}
    
    </>
  );
}







/* type TracksResponse = Awaited<ReturnType<typeof getLastTracks>>
export type TracksResponseSuccess = TracksResponse['data']
export type TracksResponseError = TracksResponse['error'] */
