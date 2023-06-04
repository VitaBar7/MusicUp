import { getTracks } from "@component/api/get-tracks"
import { GetTracksResponse } from "@component/api/types"
import { useState, useEffect, useContext } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"
import { AuthContext } from "@component/context"


export const HomeCard = () => {
    const [tracks, setTracks] = useState<GetTracksResponse|undefined>(undefined)
    const{ userAccessToken } = useContext(AuthContext) 
    const router = useRouter()

    const handleClick = () => {
      router.push(`http://localhost:3000/track-details?id={id}`)
    }
    
    useEffect(() => {
      //if user is connected we can get tracks
      if (userAccessToken) {
        getTracks(userAccessToken, 'hello, goodbye')
        .then(response => setTracks(response))
      }
      }, [userAccessToken])
  
      
      return (
        <>
        <h2 className={`self-start mt-10 tracking-wider text-2xl text-white`}>Last tracks </h2>
        <div className= "mt-6 mb-32 grid text-center sm:grid-cols-1 sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:grid-cols-4 lg:gap-8 lg:text-left" >
        {
            tracks?.tracks.items.map(item => {
                return(
                    <>
                    <div className="max-w-sm mb-2 bg-black text-white border border-black rounded-sm p-1 shadow dark:bg-gray-800 dark:border-gray-700 hover:border-pink-600" key={item.id}>
                        <Link 
                        href={`http://localhost:3000/track-details?id=${item.id}`} onClick={()=> handleClick} >
                            <img
                            className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                            src={item.album.images[0].url}
                            alt="album image"
                            />
                        </Link>
                        <div className="p-3">
                            <a href={`http://localhost:3000/track-details?id=${item.id}`}>
                                <h5 className="text-left text-2xl tracking-wider text-white dark:text-white">{item.name}</h5>
                            </a>
                            <p className="text-left text-xl text-gray-300 dark:text-gray-700">
                                {item.album.artists[0].name}
                            </p>
                            <p className="font-normal text-sm text-left text-gray-400 dark:text-gray-400">
                                album: {item.album.name}
                            </p>
                            {/* <p className="mb-3 font-normal text-xs text-left text-gray-400 dark:text-gray-400">
                                {item.id}
                            </p> */}
                        </div>
                </div>
                </>
                )
    
            })

        }
        </div>

  </>   
      )
  
  }

  export default HomeCard