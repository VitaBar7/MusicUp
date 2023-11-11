
import { AuthContext } from '@component/context'
import { supabase } from '@component/utils/supabaseClient';
import { useContext, useState, useEffect } from 'react';
import { Favorite } from "@component/api/types"
import Link from 'next/link'
import Navbar from './navbar';

type Favorites  = Favorite[]

export default function Favorites () {
    const { userId, userAccessToken, isUserAuthenticated} = useContext(AuthContext)
    const [favorites, setFavorites] = useState<Favorites|undefined>(undefined)
    const [fetchError, setFetchError] = useState("")

    useEffect(()=> {
        console.log(favorites)
    }, [favorites])

    useEffect(() => {
        getUserFavorites() 
        .then((response)=>setFavorites(response))
    }, [userId])
    
    async function getUserFavorites():Promise<Favorites | undefined> {
      const { data, error } = await supabase
        .from('favorites')
        .select()
        .eq('user_id', userId)
        .order('id', { ascending: false })
        .limit(24)

      if(error) {
        console.log('No tracks here yet')
      }
      if(data !== null && data.length > 0){
        
        return (data) as Favorites
       }

       return undefined
    
      
    }
      
    return (
        <>
          {fetchError && (<p>{fetchError}</p>)}
          {(favorites!==null && isUserAuthenticated)? 
          <>
          
          <h2 className="z-10 relative text-xl mt-10 pl-2 lg:text-xl lg:mt- md:self-start md:mt-10 ml-2 md:ml-0  sm:text-2xl sm:self-center xs:max-sm:mt-4 xs:max-sm:mb-20 xs:self-start xs:text-[1.1rem] tracking-wider text-white">Your favorites:</h2>
          <div className = "favorites grid relative rounded-md mt-4 text-center backdrop-blur-2xl xs:grid-cols-3 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-6  lg:grid-cols-5 lg:gap-6 lg:text-left xl:grid-cols-6 xl:gap-8 xs:max-sm:gap-6 xs:max-sm:p-4 xs:max-sm:-mt-20 xs:max-sm:mb-12">
            {favorites?.map((item) => {
              return (
                <>
                  <div className="text-white rounded-md backdrop-blur-2xl p-1 pb-1 shadow hover:cursor:pointer hover:border hover:border-taupe hover:drop-shadow-xl" key={item.id}>
                    <Link 
                        href={`track-details?id=${item.spotify_id}`} onClick={() => {}} >
                        <img
                        className="rounded-md"
                        src={item.image}
                        alt="album image"
                        />
                      <p className="text-xs text-center font-light tracking-wide mt-2 sm:text-center" key={item.id}>{item.track_name}
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
    )
    }





