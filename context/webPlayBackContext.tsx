import {createContext, useState, useEffect, PropsWithChildren, useContext} from 'react'
import { AuthContext } from "@component/context"

type webPlayBackContextType = {
    player?: object,
    deviceId: string,
    is_paused: boolean,
    is_active: boolean,
    current_track?: object
}

export const WebPlayBackContext = createContext<webPlayBackContextType>({
    player: undefined,
    deviceId: "",
    is_paused: false,
    is_active: false,
    current_track: undefined
})

export const WebPlayBackProvider = ({children}: PropsWithChildren) => {
    const{ userAccessToken, isUserAuthenticated } = useContext(AuthContext);
    const [player, setPlayer] = useState(undefined);
    const [deviceId, setDeviceId] = useState("");
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [current_track, setTrack] = useState(undefined);


    useEffect(() => {
        if(isUserAuthenticated && player === undefined)
        {
            const script = document.createElement("script");
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;
            document.body.appendChild(script);

            window.onSpotifyWebPlaybackSDKReady = () => {

                const player = new window.Spotify.Player({
                    name: 'Web Playback SDK',
                    getOAuthToken: cb => { cb(userAccessToken); },
                    volume: 0.3
                });

                setPlayer(player);


                player.addListener('ready', ({ device_id }) => {
                    console.log('Ready with Device ID', device_id);
                    setDeviceId(device_id);
                });

                player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });

                player.addListener('player_state_changed', ( state => {

                    if (!state) {
                        return;
                    }

                    setTrack(state.track_window.current_track);
                    setPaused(state.paused);


                    player.getCurrentState().then( state => {
                        (!state)? setActive(false) : setActive(true)
                    });

                }));

                player.connect();
            };
        } else if(!isUserAuthenticated  && player !== undefined) {
            setPlayer(undefined)
        }
    }, [isUserAuthenticated]);

    return (
        <WebPlayBackContext.Provider value={
            {
                player,
                deviceId,
                is_paused,
                is_active,
                current_track
            }
        }>
            {children}
        </WebPlayBackContext.Provider>
    )
}
