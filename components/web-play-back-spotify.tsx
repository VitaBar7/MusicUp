import React, {useContext} from "react";
import {WebPlayBackContext} from "@component/context/webPlayBackContext";

const WebPlayBackSpotify: React.FC = () => {
    const {current_track, is_paused, player} = useContext(WebPlayBackContext)

    return (
        <>
            {current_track !== undefined &&
                <div className="mb-14 mt-12 w-3/4  grid text-center lg:mt-12 xs:max-sm:w-full xs:max-sm:mb-10 ">
                    <div className="container  m-auto">
                        <p className="mb-2 text-center font-thin tracking-wider"> Currently playing :</p>
                        <div className="main-wrapper mx-h-10 flex flex-row justify-between backdrop-blur-2xl border border-white rounded-xl py-4 px-5 xs:max-sm:p-2">
                            <div className="w-1/5 xs:max-sm:w-1/4 content-center">
                                <img src={current_track?.album.images[0].url}
                                    className="now-playing__cover w-full h-auto rounded-sm" alt="album cover"/>
                            </div>

                            <div className="track_info_and_buttons flex w-4/6 rounded-xl p-2 px-4 flex-col justify-between" >
                                <div className="now-playing__side flex flex-col justify-around text-right ">
                                    <p className="now-playing__name text-lg tracking-wider xs:max-sm:text-sm ml-3">{
                                        current_track?.name
                                    }</p>
                                    <p className="now-playing__artist font-thin text-lg xs:max-sm:text-sm ml-3">{
                                        current_track?.artists[0].name
                                    }</p>
                                </div>
                                <div className="player__buttons flex justify-around">
                                    <button className="text-xs" onClick={() => {
                                        player.previousTrack()
                                    }}>
                                        <span 
                                        className="inline-block transition-transform group hover:-translate-x-1 motion-reduce:transform-none mr-1">
                                        &lt;</span>
                                        Previous 
                                    </button>

                                    <button className="font-light text-md bg-dark-grey tracking-wider rounded-full px-5 xs:max-sm:text-xs xs:max-sm:px-2 hover:opacity-80" onClick={() => {
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
                </div>
            }
        </>)
}

export default WebPlayBackSpotify