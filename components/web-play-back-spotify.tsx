import React, {useContext} from "react";
import {WebPlayBackContext} from "@component/context/webPlayBackContext";

const WebPlayBackSpotify: React.FC = () => {
    const {current_track, is_paused, player} = useContext(WebPlayBackContext)

    return (
        <>
            {current_track !== undefined &&
                <div className="mb-18 mt-12 w-4/5 grid text-center lg:mt-12 xs:max-sm:w-full xs:max-sm:mb-10 ">
                    <div className="container m-auto">
                        <p className="mb-2 text-center font-light tracking-wider"> Currently playing :</p>
                        <div className="main-wrapper mx-h-10 flex flex-col bg-charbon border border-white rounded-xl  shadow-white py-4 px-5">
                            <div className="track__info flex flex-row justify-between mb-2">
                                <img src={current_track?.album.images[0].url}
                                    className="now-playing__cover rounded-sm" alt="" style={{width:'15%'}}/>

                                <div className="now-playing__side text-md text-right xs:max-sm:text-xs">
                                    <div className="now-playing__name ml-3">{
                                        current_track?.name
                                    }</div>

                                    <div className="now-playing__artist font-thin ml-3">{
                                        current_track?.artists[0].name
                                    }</div>
                                </div>
                            </div>
                            <div className="player__buttons flex justify-between">
                                <button className="text-xs" onClick={() => {
                                    player.previousTrack()
                                }}>
                                <span 
                                className="inline-block transition-transform group hover:-translate-x-1 motion-reduce:transform-none mr-1">
                                &lt;</span>
                                    Previous 
                                </button>

                                <button className="font-light tracking-wide hover:tracking-wider xs:max-sm:text-sm" onClick={() => {
                                    player.togglePlay()
                                }}>
                                    {is_paused ? "PLAY" : "PAUSE"}
                                </button>

                                <button className="text-xs" onClick={() => {
                                    player.nextTrack()
                                }}>
                                Next 
                                <span className="inline-block transition-transform group ml-1 hover:translate-x-1 motion-reduce:transform-none">
                                &gt;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>)
}

export default WebPlayBackSpotify