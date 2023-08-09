import { supabase } from '@component/utils/supabaseClient'
import {useState, useEffect, useContext, Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getPlaylist } from '@component/api/get-playlist'
import { AuthContext } from '@component/context'
import {Playlist, Mood} from '@component/api/types'
import {WebPlayBackContext} from "@component/context/webPlayBackContext";
import {playPlayList} from "@component/api/player";




export default function MoodOptions() {
    const { deviceId } = useContext(WebPlayBackContext)
    const[moodList, setMoodList] = useState<Mood[]>([])
    const [playlist, setPlaylist] = useState<Playlist>()
    const { userAccessToken } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false);

   useEffect(() => {
    console.log(playlist?.id)
   }, [playlist])

    useEffect(() => {
        getMoodList().then((playlists)=> {
            const temporaryMoodList:Mood[] = []

            playlists.playlists?.map((mood:Mood) => {
                //console.log(mood)
                temporaryMoodList.push(mood)
            })
            setMoodList(temporaryMoodList)
    })
    }, [])

    const handleClick = (id:string) => {
        //console.log(id)
        if(id) {
            getPlaylist(userAccessToken, id)
            .then(async response => {
                    setPlaylist(response)
                    await playPlayList(response.id, deviceId, userAccessToken)
                }
            )
        }
    }


  return (
    <>
      {!showModal ? (
      <button id="sticky" className="z-40 fixed top-36 leading-5 xs:max-sm:leading-4 shadow whitespace-pre-line bg-orange/100 text-white rounded-full h-28 w-28 mr-10 p-4 self-end xs:max-sm:top-24 xs:max-sm:h-24 xs:max-sm:w-24 xs:max-sm:text-sm xs:max-sm:mr-2 hover:cursor-pointer hover:translate-x-1 hover:shadow-2xl"  onClick={() => setShowModal(true)}>
        How is <br></br>your mood?
      </button>
      ): null}
      {showModal ? (
      <>
      <div className="flex z-[9999] fixed bg-dark-grey w-screen h-screen opacity-90 md:flex-col justify-center items-center px-24 top-0 sm:mt-1 sm:w-full sm:px-2 xs:max-sm:top-0  xs:max-sm:px-2"> </div>
      <div className="bg-white z-[9999] flex flex-col relative mt-10 sm:mt-2 xs:mt-1 rounded-md m-auto ">
          <h1 className="text-2xl font-sans text-center tracking-wide font-light text-dark-grey whitespace-pre-line m-10 mt-12 sm:max-md:text-xl xs:max-sm:text-lg xs:max-sm:font-light xs:max-sm:m-6">Pick your mood for today's playlist!</h1>
          <div className="flex flex-col space-between">
            <ul className="text-dark-grey bg-white backdrop-blur-2xl xs:px-10 pt-5 pb-6 hover:">
                {moodList?.map((mood) => {
                  return (
                    <>
                        <div className="flex">
                            <li className="self-start mb-3 font-thin xs:text-md"><button className="border border-dark-grey me-auto text-dirty-white bg-dark-grey rounded-full mr-2 px-2 mb-3 hover:bg-dark-grey hover:text-dirty-white hover:translate-x-1 " onClick= {() =>{
                              handleClick(mood.spotify_id)
                              setShowModal(false)
                            }}>&gt;</button> {mood.mood}
                            </li>
                        </div>
                        </>
                    )}
                    )}
            </ul>
            <button className="bg-close-icon bg-white bg-center bg-invert text-white rounded-full w-10 h-10 bg-no-repeat m-auto my-2 hover:border hover:border-dark-grey hover:rotate-45" onClick={() => setShowModal(false)}></button>
            <p className="text-xs text-dark-grey mb-5 font-light italic text-center tracking-wide">no playlist for me today, thanks</p>
          </div>
        
      </div> 
      
      </>
        ): null}
    </>
  );

}

export async function getMoodList() {
    const { data: playlists, error } = await supabase
    .from('playlists')
    .select('mood, spotify_id')
    console.log(playlists)
    return {
        playlists
      }
  }



/* return (
    <>
      <h1 className="text-2xl m-10">This could be your playlist for today</h1>
      <div className="bg-black text-white">
        {playlists?.map((playlist) => (
          <div key={playlist.id}>
            <img className="rounded-full" src={playlist.image} alt={`playlist ${playlist.id}`} style={{ width:"100", height:"100"}}/>
            <p className='font-mono tracking-wide text-sm italic'>
            playlist id: {playlist.spotify_id}, the mood is: {playlist.mood}
            </p>
          </div>
          
          ))}
      </div>
    </>
  ); */
 