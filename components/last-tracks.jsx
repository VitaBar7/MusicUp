import { supabase } from '@component/utils/supabaseClient';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { AuthContext } from '@component/context'
import { Database } from "../types_db"



export default function LastTracks () {
  const [tracks, setTracks] = useState(null)
  const [userTracks, setUserTracks] = useState(null)
  const [fetchError, setFetchError] = useState("")
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
        setFetchError('No tracks here yet')
        setUserTracks(null)
        console.log(error)
      }
      if(data && userAccessToken) {
        setUserTracks(data)
        setFetchError("")
      }
    }

    getUserTracks(userId) 
  }, [userId])


  async function getLastTracks() {
    const { data} = await supabase
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
        {(userTracks!==null && isUserAuthenticated)? 
          <>
          <h2 className="self-start z-[9999] text-lg lg:mt-6 md:self-start md:mt-10 ml-2 md:ml-0 xs:self-start xs:max-sm:hidden tracking-wider text-white">Recent tracks:</h2> 
          <div className = "user-tracks grid relative rounded-md mt-2 pt-2 text-center backdrop-blur-2xl xs:grid-cols-3 sm:grid-cols-4 sm:gap-2 md:grid-cols-6 md:gap-3 lg:grid-cols-8 lg:gap-4 lg:text-left xl:grid-cols-10 xl:gap-4 xs:max-sm:gap-4 xs:max-sm:p-1 xs:max-sm:-mt-14 xs:max-sm:mb-12">
            {userTracks.map((item) => {
              return (
                <>
                  <div className="text-white rounded-md backdrop-blur-2xl p-1 shadow hover:cursor:pointer hover:border hover:border-taupe hover:drop-shadow-xl">
                    <Link 
                        href={`track-details?id=${item.spotify_id}`} onClick={() => {}} >
                        <img
                        className="rounded-md"
                        src={item.image}
                        alt="album image"
                        />
                      <p className="text-[12px] leading-[14px] xs:max-sm:leading-3 text-center font-light tracking-wide mt-2 sm:text-center xs:max-sm:text-[10px]" key={item.id}>{item.title}
                      <span className="not-italic font-thin"> by {item.artist_name}</span></p>
                    </Link>
                  </div>
                </>
              )
            })}

          </div>
          </>
        :null}
    
    </>
  );
}







/* type TracksResponse = Awaited<ReturnType<typeof getLastTracks>>
export type TracksResponseSuccess = TracksResponse['data']
export type TracksResponseError = TracksResponse['error'] */
