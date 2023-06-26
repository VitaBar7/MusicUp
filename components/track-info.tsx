import { AuthContext } from "@component/context"
import { getTrackDetails } from "@component/api/get-tracks"
import { GetTrack } from "@component/api/types"
import { useState, useEffect } from "react"
import {useContext} from "react"
import { supabase } from '@component/utils/supabaseClient';




export const TrackInfo = () => {
    const [trackDetails, setTrackDetails] = useState<GetTrack|undefined>(undefined)
    const [trackId, setTrackId] = useState<string>("")
    const{ userAccessToken } = useContext(AuthContext)

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        if(id !== null){
            setTrackId(id)
        }
        console.log(id)
    }, [userAccessToken])


    useEffect(() => {
    //if user is connected and trackId not empty we can get track details
        if (trackId !== "" && userAccessToken !== "" ) {
            getTrackDetails(userAccessToken, trackId)
            .then(response => setTrackDetails(response))
        }
    
    }, [trackId, userAccessToken])

    useEffect(() => { 
        console.log(trackDetails?.artists)
    }, [trackDetails])

    useEffect(() => {

    })


    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="mt-6 mb-32 max-h-fit grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
                <div className="group rounded-md border-transparent mx-1 p-1 transition-colors hover:border-gray-300 hover:bg-dirty-white hover:text-dark-grey">
                    <img
                        className="rounded-sm relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                        src={trackDetails?.album?.images[0].url}
                        alt="album image"
                        
                        />
                    <h2 className="mb-1 text-2xl tracking-wider hover:text-dark-grey">
                        {trackDetails?.name} 
                    </h2>
                    <p className= "m-0 mb-2 max-w-5xl hover:text-dark-grey text-thin text-md opacity-70">
                        album: {trackDetails?.album?.name} 
                    </p>
                    <a href={trackDetails?.artists[0]?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <p className= "m-0 mb-2 max-w-5xl text-xl text-thin tracking-wide hover:text-dark-grey  opacity-80 hover:text-normal">
                           by {trackDetails?.artists[0]?.name} 
                        </p>
                    </a>

                    <a href={trackDetails?.external_urls.spotify} className="inline-flex items-center m-auto px-3 py-2 text-sm font-light text-center text-white border-white rounded-lg bg-dark-grey hover:cursor-pointer hover: ring-1 focus:outline-none focus:ring-light-pink dark:focus:ring-light-pink" target="_blank" rel="noopener noreferrer">
                        play in spotify
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 mr-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

        </main>
        </>
    )
}

export default TrackInfo