import React, {useContext} from "react";
import {WebPlayBackContext} from "@component/context/webPlayBackContext";


const MiniWebPlayBackSpotify: React.FC = () => {
    const {current_track, is_paused, player} = useContext(WebPlayBackContext)

    return (
        <>
            {current_track !== undefined &&
                <div className="mb-10 mt-12 w-1/6 xl:1/12 grid xs:max-sm:mt-20 xs:max-md:w-1/3 xs:max-sm:mb-24">
                    <div className="self-start z-[9999] rounded-xl ">
                        {/* <p className="text-left ml-1 font-thin tracking-wider xs:max-sm:text-sm"> Now playing:</p> */}
                        <div className="player_wrapper border rounded-xl flex flex-col justify-between p-1 xs:max-sm:flex-row">
                            <div className="content-center xs:max-sm:">
                                <img src={current_track?.album.images[0].url}
                                    className="now-playing__cover w-full h-auto rounded-xl " alt="album cover"/>
                            </div>

                            <div className="play_pause_button absolute mx-auto group p-2 xs:max-sm:absolute xs:max-sm:p-1" >
                                <button className="" onClick={() => {
                                    player?.togglePlay()
                                }}>
                                    {is_paused ? 
                                    <svg className="pause_svg opacity-80 pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out hover:" fill="grey" height="72px" width="72px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,   269.57l-128,80
                                        c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176
                                        c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57
                                        S349.156,266.641,344.48,269.57z"/>
                                    </svg>: 
                                    <svg className="pause_svg opacity-80 pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out hover:fill-grey hover:border-grey" fill="grey" height="72px" width="72px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512" >
                                        <path className="" d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320
                                        c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320
                                        c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z"/>
                                    </svg>
                                    }
                                </button>
                                
                    
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>)
}

export default MiniWebPlayBackSpotify