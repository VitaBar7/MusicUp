import { AuthContext } from "@component/context"
import { getTrackDetails } from "@component/api/get-tracks"
import { GetTrack } from "@component/api/types"
import { useState, useEffect } from "react"
import {useContext} from "react"
import { playTrack } from "@component/api/play-track"




export const TrackInfo = () => {
    const [trackDetails, setTrackDetails] = useState<GetTrack|undefined>(undefined)
    const [trackId, setTrackId] = useState<string>("")
    const{ userAccessToken } = useContext(AuthContext)
    const [player, setPlayer] = useState(undefined)
    const [deviceId, setDeviceId] = useState("")
    
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



   /*  useEffect(() => {
        console.log('player', userAccessToken)
        if(userAccessToken) {

            const script = document.createElement("script");
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;
        
            document.body.appendChild(script);
            //@ts-ignore
            window.onSpotifyWebPlaybackSDKReady = () => {
                //@ts-ignore
                const player = new window.Spotify.Player({
                    name: 'Web Playback SDK',
                    //@ts-ignore
                    getOAuthToken: cb => { cb(props.token); },
                    volume: 0.5
                });
                //@ts-ignore
                setPlayer(player)
                //@ts-ignore
                player.addListener('ready', ({ device_id }) => {
                    setDeviceId(device_id)
                    console.log('Ready with Device ID', device_id);
                });
                //@ts-ignore
                player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });
        
        
                player.connect();
                //player.togglePlay();
            };
        }
    }, []); */


    const initializeSpotifyPlayer = () => {
       playTrack(deviceId, trackId, userAccessToken)
     /*    //@ts-ignore
        window.onSpotifyWebPlaybackSDKReady = () => {
            //@ts-ignore
            const player = new Spotify.Player({
              name: 'Web Playback SDK Quick Start Player',
              //@ts-ignore
              getOAuthToken: cb => { cb(userAccessToken); },
              volume: 0.5
            });
        } */
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

                    <button type="button" className="inline-flex m-auto px-3 py-2 text-sm font-light text-center text-white border-white rounded-lg bg-dark-grey hover:cursor-pointer hover: ring-1 focus:outline-none focus:ring-light-pink dark:focus:ring-light-pink" onClick={()=>{initializeSpotifyPlayer}}>
                        play in spotify
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 mr-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
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