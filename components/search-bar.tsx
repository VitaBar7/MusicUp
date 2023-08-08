import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@component/context'
import { getTracks } from "@component/api/get-tracks"
import { getAlbums, getArtist } from '@component/api/get-artists'
import { Album, Artists, Item } from "@component/api/types"
import Dropdown from './search-options'
import { supabase } from '@component/utils/supabaseClient'
import MoodOptions from './mood-options'
import BackButton from './back-button'


const placeholderImage = '/cartoon-grey-ghost-20103.png'

const CLIENT_ID = "0e7d7413b7494383814e036c1d527467"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const scope = "streaming user-read-email user-read-private"


const login = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`

export const SearchSong = () => {
    const [searchInput, setSearchInput] = useState("")
    const { userAccessToken, isUserAuthenticated, userId} = useContext(AuthContext)
    const [tracks, setTracks] = useState<Item[]|undefined>(undefined)
    const [artists, setArtists] = useState<Artists[]>([])
    const [albums, setAlbums] = useState<Album[]>([])
    const [artistId, setArtistId] = useState<string|null>("")
    const [searchDropdownValue, setDropdownValue] = useState<string>("song")
    const router = useRouter()

    
   useEffect(() => {
    console.log(artistId)
    }, [artistId])

    useEffect(() => {   
        console.log(albums)
    }, [albums])

    
    
    //save last tracks in last_tracks table in db: 
    const saveTracks = async (item: Item, userId:string) => {     
        const { error } = await supabase
        .from('last_tracks')
        .insert({ 
            spotify_id: item.id, 
            title: item.name, 
            artist_name: item.album.artists[0].name, 
            image: item.album.images[1].url,
            user_id: userId
        })   
    }

    const saveUser = async (userId: string) => {
        const { error } = await supabase
        .from('user')
        .insert({ 
            spotify_id: userId
        })   

    }


    const handleClick = async (item:Item) => {
        if(isUserAuthenticated) {
        await saveTracks(item, userId)
        saveUser(userId)}
        router.push(`http://localhost:3000/track-details?id=${item.id}`)}


    //Search
    const search = async () => {
       if (isUserAuthenticated && userAccessToken) {
           //depending on search option getTracks or getArtist
           if(searchDropdownValue==="song"){
               getTracks(userAccessToken, searchInput)
               .then(response => setTracks(response.tracks?.items))
           } else {
               getArtist(userAccessToken, searchInput)
               .then((response) => setArtists(response.artists?.items))
           }     
       } else {router.push(login)}
    }
    //click on an artist and get albums
    const onArtistClick = (artistId:string|null) => { 
        
        if(artistId) {   
        getAlbums(userAccessToken, artistId)
        .then(response => setAlbums(response.items))
        setArtists([])
        }   
    }
    
    return (
        <>
        <div className="flex flex-row mb-6 relative top-1 z-12 w-full max-w-5xl font-sans text-lg sm:flex lg:flex xs:max-sm:flex-col">
            <Dropdown onChange={setDropdownValue}/>
            <div className="mt-[2px] xs:max-sm:mt-0">
                <input
                    className="rounded-md max-h-8 mr-2 px-2 py-1 text-sm !text-dark-grey italic xs:max-sm:text-xs"
                    placeholder="write it here"
                    onKeyDown={event => { if (event.key == 'Enter'){
                        search()
                        setAlbums([])
                        setTracks([]) 
                        setArtists([])
                    }}}
                    onChange={event => {
                        setTracks([]) 
                        setArtists([])
                        setAlbums([])
                        setSearchInput(event.target.value)
                    }}
                />
                <button className="rounded-sm mt-1 max-h-8 text-white px-2 hover:italic" 
                onClick={search}>
                    Go!
                </button>
            </div>
        </div>
        {(!artists.length && !albums.length && !tracks?.length) ? <MoodOptions/>:null}
        
        <section className= "grid mb-10 text-center backdrop-blur-2xl xs:grid-cols-2 xs:max-sm:gap-6 sm:gap-6 xs:max-sm:mt-8 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:mb-0 lg:grid-cols-5 xl:grid-cols-6 lg:gap-8" >
            {tracks && <h2 className="text-white">search results</h2>&&(
                tracks?.map(item => {
                    return(
                        <>
                        <div className="flex flex-col text-white">
                            <div className="max-w-sm pb-2 rounded-md p-1 shadow hover:shadow-xl">
                                <Link 
                                href={`track-details?id=${item.id}`} onClick={() => handleClick(item)}>
                                    <img
                                    className="relative rounded-md dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                    src={item.album.images[1].url?? placeholderImage}
                                    alt="album image" 
                                    />
                                    <div className=" text-white ml-1 mt-1">
                                        <h5 className="text-left text-sm font-light text-normal tracking-wide  leading-5 hover:tracking-wider">{item.name}</h5>
                                        <p className="text-left text-xs font-thin hover:italic">
                                        by {item.album.artists[0].name}
                                        </p>
                                    </div>
                                    
                                </Link>
                            </div>

                        </div>
                        </>
                    )
                })
            )}
        </section>
        {
        artists.length>0?
        (<BackButton/>): null}
        {artists && (
            
        <div className= "grid text-center backdrop-blur-2xl xs:max-sm:grid-cols-3 xs:max-sm:gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:mb-0 lg:grid-cols-6 lg:gap-8 lg:text-left hover:drop-shadow-[0_0_0.3rem_#ffffff" >
                {artists?.map(artist => {
                    return(
                        <>
                        <div className="max-w-sm mb-2 rounded-md p-1 shadow hover:drop-shadow-[0_0_0.3rem_#282727] hover:!border-pink-600">
                            <div
                                onClick={() => onArtistClick(artist.id)}>
                                <img
                                className="relative cursor-pointer rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src={artist?.images[0]?.url ?? placeholderImage}
                                alt=""
                                />
                            </div>
                            <div className="p-2">
                                <a href={artist.external_urls.spotify} onClick={()=>{}}>
                                    <h5 className=" text-md text-center font-light italic tracking-wider text-white dark:text-white">{artist.name}</h5>
                                </a>
                                
                            </div>
                        </div>
                        </>
                    )
                })
                }   
        </div>)
        }
        {albums.length>0 ?
        (<BackButton/>):null}

        {<div className= "grid text-center sm:grid-cols-2 backdrop-blur-2xl sm:gap-6 md:grid-cols-3 md:gap-6 lg:mb-0 lg:grid-cols-4 lg:gap-8 lg:text-left" >
            {albums ? (
                albums?.map(album => {  
                return(
                    <>
                    <div className="max-w-sm mb-2 bg-white text-dark-grey rounded-md p-1 shadow hover:border hover:border-light-pink">
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
                                <h5 className="text-left text-xl font-semibold leading-5 tracking-tight text-dark-grey hover:not-italic">{album.name}</h5>
                            </a>
                            <a href="">
                                <p className="text-left text-xl tracking-wider font-semibold text-grey ">
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
            
            ):null
            } 
        </div>
        }
        </>
    )
}

export default SearchSong