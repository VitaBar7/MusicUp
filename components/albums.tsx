import { getAlbums, getArtist } from "@component/api/get-artists"
import { Album } from "@component/api/types"
import { AuthContext } from "@component/context"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"


export const Albums = () => {
    const{ userAccessToken } = useContext(AuthContext) 
    const [artistId, setArtistId] = useState<string>("")
    const [albums, setAlbums] = useState<Album[]>([])
    const [artists, setArtists] = useState<Album[]>([])
    

    return (
        <>
       
        <div className= "mt-6 mb-32 grid text-center sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-6 lg:mb-0 lg:grid-cols-3 lg:gap-8 lg:text-left" >
       { (
            albums?.map(album => {
                return(
                    <>
                    <div className="max-w-sm mb-2 bg-white border border-black rounded-sm p-1 shadow dark:bg-gray-800 dark:border-gray-700 hover:border-pink-600">
                        <Link 
                        href={album.external_urls.spotify} onClick={()=>{}}>
                            <img
                            className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={album?.images[0]?.url}
                            alt="album image"
                            />
                        </Link>
                        <div className="p-2">
                            <a href={album.external_urls.spotify} onClick={()=>{}}>
                                <h5 className="text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{album.name}</h5>
                            </a>
                            <a href="">
                                <p className="text-left font-bold text-gray-700 dark:text-gray-400">
                                    {album.artists[0].name}
                                </p>
                            </a>
                            <p className="font-normal text-sm text-left text-gray-700 dark:text-gray-400">
                                {album.release_date}
                            </p>
                        </div>
                    </div>
                    </>
                )
            })
            )
        } 
        </div>
        </>
    )
}


export default Albums