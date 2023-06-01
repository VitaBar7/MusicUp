import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
//import { useHistory } from 
import { useRouter } from 'next/navigation'
import { AuthContext } from '@component/context'
import { getTracks } from "@component/api/get-tracks"
import { getAlbums, getArtist } from '@component/api/get-artists'
import { Album, Artists, Item } from "@component/api/types"
import Dropdown from './search-options'


export const SearchSong = () => {
    const [searchInput, setSearchInput] = useState("")
    const { userAccessToken } = useContext(AuthContext)
    const [tracks, setTracks] = useState<Item[]|undefined>(undefined)
    const [artists, setArtists] = useState<Artists[]>([])
    const [albums, setAlbums] = useState<Album[]>([])
    const [artistId, setArtistId] = useState<string|null>("")
    const [searchDropdownValue, setDropdownValue] = useState<string>("song")
    const [isHidden, setIsHidden] = useState<string>("hidden")
    const router = useRouter()

    const handleClick = () => router.push(`http://localhost:3000/track-details?id={id}`)

   useEffect(() => {
    console.log(searchDropdownValue)
   }, [searchDropdownValue])

   useEffect(() => {
    console.log(artistId)
    }, [artistId])

    useEffect(() => {   
        console.log(albums)
    }, [albums])

    //Search
    const search = async () => {
        //depending on search option getTracks or getArtist
        if(searchDropdownValue==="song"){
            getTracks(userAccessToken, searchInput)
            .then(response => setTracks(response.tracks.items))
        } else {
            getArtist(userAccessToken, searchInput)
            .then((response) => setArtists(response.artists?.items))
        }     
    }
    //click on an artist and get albums
    const onArtistClick = (artistId:string|null) => { 
        /* const clickedArtist: string|null
        setArtistId(clickedArtist ? clickedArtist : null) */
        console.log(artistId)
        if(artistId) {   
        getAlbums(userAccessToken, artistId)
        .then(response => setAlbums(response.items))
        setArtists([])
        }   
    }

   /*  const handleVisibility = () => {
    } */

   /*  let displayButton="hidden"
    albums? displayButton="block":displayButton="hidden" */

   /*  !albums?setIsHidden('hidden'):setIsHidden('block') */
    
    return (
        <>
        <div className="w-full mt-2 mb-6 max-w-5xl font-sans text-lg sm:flex lg:flex">
            <Dropdown onChange={setDropdownValue}/>
            <div className="">
                <input
                    className="rounded-sm max-h-8 mr-2 px-2 py-1 text-sm italic"
                    placeholder="write it here"
                    onKeyDown={event => { if (event.key == 'Enter'){
                        search()
                        setAlbums([])
                    }}}
                    onChange={event => {
                        setTracks([]) 
                        setArtists([])
                        setAlbums([])
                        setSearchInput(event.target.value)
                    }}
                />
                <button className="rounded-sm mt-2 bg-black max-h-8 text-white px-2 hover:italic" onClick={search}>
                    Go!
                </button>
            </div>
        </div>
      {/*    <button className={`self-start mb-2 ml-2 font-light flex text-white text-xl hover:italic`} type="button" onClick={() => router.refresh()}>
            <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            &lt;</span>{' '}Back to search
          </button> */}
        <section className= "grid text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:grid-cols-4 xl:grid-col-6 lg:gap-8 lg:text-left" >
            {tracks && (
                tracks?.map(item => {
                    return(
                        <>
                        <div className="flex flex-col text-white">
                            <div className="max-w-sm pb-2 bg-white border border-black rounded-sm p-1 shadow dark:bg-gray-800 dark:border-gray-700 hover:border-pink-600" key={item.id}>
                                <Link 
                                href={`http://localhost:3000/track-details?id=${item.id}`} onClick={()=> handleClick} >
                                    <img
                                    className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src={item.album.images[0].url}
                                    alt="album image" 
                                    />
                                <a href={`http://localhost:3000/track-details?id=${item.id}`}>
                                    <h5 className="text-left text-sm text-gray-600 font-mono ml-1 mt-1 tracking-tight leading-5 dark:text-white">{item.name}</h5>
                                </a>
                                </Link>
                            </div>
                            <div className="p-1 pt-2">
                                <p className="text-left text-md hover:text-gray-400 dark:text-gray-400">
                                    {item.album.artists[0].name}
                                </p>
                                <p className="d tracking-tight font-mono  text-xs text-left dark:text-gray-400">
                                    <span className="font-normal"> album: </span>{item.album.name}
                                </p>
                            </div>

                        </div>
                        </>
                    )
                })
            )}
        </section>
        {artists &&
        <div className= "grid text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-6 lg:mb-0 lg:grid-cols-6 lg:gap-8 lg:text-left" >
                {artists?.map(artist => {
                    return(
                        <>
                        <div className="max-w-sm mb-2 bg- border border-black rounded-md p-1 shadow dark:bg-gray-800 dark:border-gray-700 hover:border-pink-600" key={artist.id}>
                            <div
                                
                                onClick={() => onArtistClick(artist.id)}>
                                <img
                                className="relative rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src={artist?.images[0]?.url}
                                alt="album image"
                                />
                            </div>
                            <div className="p-2">
                                <a href="" onClick={()=>{}}>
                                    <h5 className="text-left text-xl text-center font-light italic tracking-wider text-white dark:text-white">{artist.name}</h5>
                                </a>
                                {/* <a href={artist.external_urls.spotify}>
                                    <p className="text-left font-bold text-gray-700 dark:text-gray-400">
                                        {artist.name}
                                    </p>
                                </a> */}
                            
                            </div>
                        </div>
                        </>
                    )
                })
                }   
        </div>
        }
        { <div className= "grid text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:grid-cols-4 lg:gap-8 lg:text-left" >

            {albums && 
            <button 
            className={`self-start mb-2 ml-2 font-light flex text-white text-xl hover:italic`} type="button"  
            onClick={() => router.refresh()}>
                <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">&lt;</span>{' '}Back to search
            </button> && (
                albums?.map(album => {  
                return(
                    <>
                    <div className="max-w-sm mb-2 bg-white border border-black rounded-md p-1 shadow dark:bg-gray-800 dark:border-gray-700 hover:border-pink-600" key={album.id}>
                        <Link 
                        href={album.external_urls.spotify} onClick={()=>{}}
                        target='_blank'
                        rel="noopener noreferrer">
                            <img
                            className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={album?.images[0]?.url}
                            alt="album image"
                            />
                        </Link>
                        <div className="p-1 pt-2">
                            <a href={album.external_urls.spotify} target='_blank' rel="noopener noreferrer">
                                <h5 className="text-left text-xl font-semibold leading-5 tracking-tight text-gray-900  dark:text-white">{album.name}</h5>
                            </a>
                            <a href="">
                                <p className="text-left text-xl tracking-wider font-semibold text-gray-500 dark:text-gray-400">
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
            
            )} 
        </div>
        }
        </>
    )
}

export default SearchSong