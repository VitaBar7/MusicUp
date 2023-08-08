import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
//import { useHistory } from 
import { useRouter } from 'next/navigation'
import { AuthContext } from '@component/context'
import { getTracks } from "@component/api/get-tracks"
import { getAlbums, getArtist } from '@component/api/get-artists'
import { Album, Artists, Item } from "@component/api/types"
import Dropdown from './search-options'
import { supabase } from '@component/utils/supabaseClient'



export const SearchSong = () => {
    const [searchInput, setSearchInput] = useState("")
    const { userAccessToken } = useContext(AuthContext)
    const [tracks, setTracks] = useState<Item[]|undefined>(undefined)
    const [artists, setArtists] = useState<Artists[]>([])
    const [albums, setAlbums] = useState<Album[]>([])
    const [artistId, setArtistId] = useState<string|null>("")
    const [searchDropdownValue, setDropdownValue] = useState<string>("song")
    const router = useRouter()

    const handleClick = async (item:Item) => {
        console.log("click")
        await saveTracks(item)
        router.push(`http://localhost:3000/track-details?id=${item.id}`)}
        
 //save last tracks in last_tracks table in db: 
 const saveTracks = async (item: Item) => {     
    const { error } = await supabase
        .from('last_tracks')
        .insert({ 
            spotify_id: item.id, 
            title: item.name, 
            artist_name: item.album.artists[0].name, 
            image: item.album.images[1].url
        })
        .limit(24)
   
}
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
            .then(response => setTracks(response.tracks?.items))
        } else {
            getArtist(userAccessToken, searchInput)
            .then((response) => setArtists(response.artists?.items))
        }     
    }
    //click on an artist and get albums
    const onArtistClick = (artistId:string|null) => { 
        console.log(artistId)
        if(artistId) {   
        getAlbums(userAccessToken, artistId)
        .then(response => setAlbums(response.items))
        setArtists([])
        }   
    }

   /*  const handleVisibility = () => {
    } */

    
    return (
        <>
        <div className="flex flex-row relative top-2 z-12 w-full max-w-5xl font-sans text-lg sm:flex lg:flex xs:max-sm:flex-col">
            <Dropdown onChange={setDropdownValue}/>
            <div className="mt-1.5 xs:max-sm:mt-0">
                <input
                    className="rounded-sm max-h-8 mr-2 px-2 py-1 text-sm !text-dark-grey italic"
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
                <button className="rounded-sm mt-2 max-h-8 text-white px-2 hover:italic" onClick={search}>
                    Go!
                </button>
            </div>
        </div>
      {/*    <button className={`self-start mb-2 ml-2 font-light flex text-white text-xl hover:italic`} type="button" onClick={() => router.refresh()}>
            <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            &lt;</span>{' '}Back to search
          </button> */}
        <section className= "grid mb-10 text-center backdrop-blur-2xl sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-col-6 lg:gap-8 lg:text-left" >
            {tracks && (
                tracks?.map(item => {
                    return(
                        <>
                        <div className="flex flex-col text-white">
                            <div className="max-w-sm pb-2 rounded-sm p-1 shadow hover:shadow-xl">
                                <Link 
                                href={`track-details?id=${item.id}`} onClick={() => handleClick(item)}>
                                    <img
                                    className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src={item.album.images[0].url}
                                    alt="album image" 
                                    />
                                    <h5 className="text-left text-sm text-white font-light text-normal tracking-wide ml-1 mt-1 leading-5 hover:tracking-wider">{item.name}</h5>
                                    
                                </Link>
                            </div>
                            <div className="p-1 pt-2">
                                <p className="text-left text-md hover:italic">
                                    {item.album.artists[0].name}
                                </p>
                                <p className="font-thin tracking-wide text-xs text-left">
                                    <span className="font-normal"> Album: </span>{item.album.name}
                                </p>
                            </div>

                        </div>
                        </>
                    )
                })
            )}
        </section>
        {artists &&
        <div className= "grid text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-6 lg:mb-0 lg:grid-cols-6 lg:gap-8 lg:text-left hover:drop-shadow-[0_0_0.3rem_#ffffff" >
                {artists?.map(artist => {
                    return(
                        <>
                        <div className="max-w-sm mb-2 rounded-md p-1 shadow hover:drop-shadow-[0_0_0.3rem_#282727] hover:!border-pink-600">
                            <div
                                onClick={() => onArtistClick(artist.id)}>
                                <img
                                className="relative cursor-pointer rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src={artist?.images[0]?.url}
                                alt="album image"
                                />
                            </div>
                            <div className="p-2">
                                <a href="" onClick={()=>{}}>
                                    <h5 className=" text-lg text-center font-light italic tracking-wider text-white dark:text-white">{artist.name}</h5>
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
                    <div className="max-w-sm mb-2 bg-white text-dark-grey rounded-md p-1 shadow hover:border hover:border-deep-magenta">
                        <a 
                        href={album.external_urls.spotify} onClick={()=>{}}
                        target='_blank'
                        rel="noopener noreferrer">
                            <img
                            className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                            src={album?.images[0]?.url}
                            alt="album image"
                            />
                        </a>
                        <div className="p-1 pt-2">
                            <a href={album.external_urls.spotify} target='_blank' rel="noopener noreferrer">
                                <h5 className="text-left text-xl font-semibold leading-5 tracking-tight text-dark-grey">{album.name}</h5>
                            </a>
                            <a href="">
                                <p className="text-left text-xl tracking-wider font-semibold text-grey">
                                    {album.artists[0].name}
                                </p>
                            </a>
                            <p className="font-normal text-sm text-left text-gray-700">
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