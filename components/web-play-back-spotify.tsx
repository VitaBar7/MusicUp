import React, {useContext} from "react";
import {WebPlayBackContext} from "@component/context/webPlayBackContext";

const WebPlayBackSpotify: React.FC = () => {
    const {current_track, is_paused, player} = useContext(WebPlayBackContext)

    return (
        <>
            {current_track !== undefined &&
                <div className="mb-24 grid text-center self-center lg:mt-12  lg:text-left">
                    <div className="container">
                        <p> Currently playing</p>
                        <div className="main-wrapper">
                            <img src={current_track.album.images[0].url}
                                 className="now-playing__cover" alt=""/>

                            <div className="now-playing__side">
                                <div className="now-playing__name">{
                                    current_track.name
                                }</div>

                                <div className="now-playing__artist">{
                                    current_track.artists[0].name
                                }</div>
                                <button onClick={() => {
                                    player.previousTrack()
                                }}>
                                    Previous song
                                </button>

                                <button onClick={() => {
                                    player.togglePlay()
                                }}>
                                    {is_paused ? "PLAY" : "PAUSE"}
                                </button>

                                <button onClick={() => {
                                    player.nextTrack()
                                }}>
                                    Next song
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>)
}

export default WebPlayBackSpotify