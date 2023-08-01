import React, {useContext} from "react";
import {WebPlayBackContext} from "@component/context/webPlayBackContext";


const WebPlayBackSpotify: React.FC = () => {
    const {current_track, is_paused, player} = useContext(WebPlayBackContext)

    return (
        <>
            {current_track !== undefined &&
                <div className="mb-14 mt-12 w-3/4 grid mx-auto lg:mt-12 xs:max-sm:w-full xs:max-sm:mb-10 ">
                    <div className="container mx-auto z-[9999] rounded-xl xs:max-sm:mb-12">
                        <p className="text-left mt-20 ml-2 font-thin tracking-wider xs:max-sm:mt-14"> Currently playing :</p>
                        <div className="main-wrapper border rounded-xl mx-h-10 flex flex-row justify-between backdrop-blur-2xl  py-4 px-5 xs:max-sm:p-2 xs:max-sm:">
                            <div className="w-1/5 xs:max-sm:w-1/3 content-center">
                                <img src={current_track?.album.images[0].url}
                                    className="now-playing__cover w-full h-auto rounded-md" alt="album cover"/>
                            </div>

                            <div className="track_info_and_buttons flex w-4/6 rounded-xl p-2 px-4 flex-col justify-between" >
                                <div className="now-playing__side flex flex-col justify-around text-right ">
                                    <p className="now-playing__name text-xl tracking-wider xs:max-sm:text-sm ml-3">{
                                        current_track?.name
                                    }</p>
                                    <p className="now-playing__artist font-thin text-lg xs:max-sm:text-xs ml-3">{
                                        current_track?.artists[0].name
                                    }</p>
                                </div>
                                <div className="player__buttons flex justify-around">
                                    <button className="text-xs" onClick={() => {
                                        player?.previousTrack()
                                    }}>
                                        <span 
                                        className="inline-block transition-transform group hover:-translate-x-1 motion-reduce:transform-none mr-1">
                                        &lt;</span>
                                        Previous 
                                    </button>

                                    <button className="font-light text-md bg-dark-grey tracking-wider rounded-full py-3 px-5 xs:max-sm:lowercase xs:text-xs xs:max-sm:p-2 over:opacity-80" onClick={() => {
                                        player?.togglePlay()
                                    }}>
                                        {is_paused ? "PLAY" : "PAUSE"}
                                    </button>

                                    <button className="text-xs" onClick={() => {
                                        player?.nextTrack()
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