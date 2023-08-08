import { AuthContext } from "@component/context"
import { getTrackDetails } from "@component/api/get-tracks"
import { GetTrack} from "@component/api/types"
import { useState, useEffect } from "react"
import {useContext} from "react"
import {playTrack} from "@component/api/player";
import {WebPlayBackContext} from "@component/context/webPlayBackContext";


export const TrackInfo = () => {
    const{ userAccessToken } = useContext(AuthContext)
    const { deviceId } = useContext(WebPlayBackContext)
    const [trackDetails, setTrackDetails] = useState<GetTrack|undefined>(undefined)
    const [trackId, setTrackId] = useState<string>("")
    

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        if(id !== null){
            setTrackId(id)
        }
    }, [userAccessToken])


    useEffect(() => {
    //if user is connected and trackId not empty we can get track details
        if (trackId !== "" /* && userAccessToken !== "" */ ) {
            getTrackDetails(userAccessToken, trackId)
            .then(response => setTrackDetails(response))
        }
    
    }, [trackId, userAccessToken])

     

    const startTrack = async () => {
        await playTrack(trackId, deviceId, userAccessToken)
    }



    return (
        <>
            <div className="mb-12 max-h-fit grid text-center lg:mb-0 lg:grid-cols-2 md:grid-cols-2 xs:gap-y-4 lg:text-left xs:grid-cols-1">
                <div className="grid rounded-md border-transparent grid-cols-1 mx-1 p-1 transition-colors hover:border-gray-300 bg-dirty-white text-dark-grey">
                    <img
                        className="rounded-sm relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                        src={trackDetails?.album?.images[0].url}
                        alt="album image"
                        
                        />
                    <h2 className="mb-1 text-2xl md:text-xl sm:text-lg xs:text-md tracking-wider text-dark-grey">
                        {trackDetails?.name} 
                    </h2>
                    <p className= "m-0  max-w-5xl text-dark-grey md:text-sm sm:text-xs xs:text-xs text-thin text-md opacity-70">
                        album: {trackDetails?.album?.name}  
                    </p>
                    <a href={trackDetails?.artists[0]?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <p className= "m-0 mb-2 max-w-5xl text-xl md:text-md sm:text-sm xs:text-xs text-thin tracking-wide text-dark-grey  opacity-80 hover:text-normal">
                           by {trackDetails?.artists[0]?.name} 
                        </p>
                    </a>
                    <button className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group hover:" onClick={ startTrack }>
                        <svg className="pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" fill="white" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                            <circle className="fill-dark-grey" cx="36" cy="36" r="36" fillOpacity=".8" />
                            <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
                        </svg>
                    </button>
                    {/* <button 
                    type="button" 
                    className="inline-flex m-auto mb-3 px-5 pb-3 pt-2 text-sm font-light text-center text-white border-white rounded-full bg-dark-grey hover:cursor-pointer hover:opacity-90 ring-1 focus:outline-none focus:ring-light-pink dark:focus:ring-light-pink" 
                    onClick={
                        startTrack
                    }>
                        play music
                    </button> */}
                </div>
                <div className="grid rounded-md border-transparent grid-cols-1 mx-1 p-6 transition-colors hover:border-gray-300 bg-dirty-white text-dark-grey">
                    <h3 className="text-center">Song's lyrics will be here...</h3>
                    <p className="text-xs text-center overflow-y-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ullam excepturi earum consequuntur repellat neque veniam distinctio, reprehenderit iure incidunt quam doloribus eligendi laudantium quibusdam mollitia? Id ab labore maiores.</p>
                </div>
            </div>

        
        </>
    )
}

export default TrackInfo