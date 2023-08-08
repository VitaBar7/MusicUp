import { supabase } from '@component/utils/supabaseClient'
import {useState, useEffect, useContext} from 'react'
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

   /*  const handleMouseEvent = (e:MouseEvent) => {
      e.preventDefault()
      const stickyButton = document.querySelector<HTMLElement>("#sticky")
          let x = e.pageX
          let y = e.pageY
          //@ts-ignore
          stickyButton.style.top = y + "px"
          //@ts-ignore
          stickyButton.style.left = x + "px"
    } */


  return (
    <>
      {!showModal ? (<button id="sticky" className="z-40 fixed top-40 shadow whitespace-pre-line bg-orange/90 text-white rounded-full h-28 w-28 mr-10 p-4 self-end xs:max-sm:top-24 xs:max-sm:h-24 xs:max-sm:w-24 xs:max-sm:text-sm xs:max-sm:mr-2 hover:cursor-pointer hover:bg-orange/100 hover:animate-liquid hover:shadow-xl"  onClick={() => setShowModal(true)}>
        How is <br></br>your mood?
      </button>): null}
      <div className="flex z-80 md:flex-col justify-center items-center px-24 sticky top-28 sm:mt-1 sm:w-full sm:px-2 xs:max-sm:top-16 xs:max-sm:mt-3 xs:max-sm:px-2">
       {showModal ? (<div className="bg-dark-grey/90 mt-10 sm:mt-2 xs:mt-1 text-thin rounded-md m-auto ">
          <h1 className="text-2xl font-sans tracking-wide italic font-thin text-white whitespace-pre-line m-10 mt-12 sm:max-md:text-xl xs:max-sm:text-lg xs:max-sm:font-thin xs:max-sm:m-6">Pick your mood to get the right playlist!</h1>
          <div className="flex flex-col space-between">
            <ul className="text-dark-grey bg-white backdrop-blur-2xl xs:px-10 pt-5 pb-6 hover:">
                {moodList?.map((mood) => {
                    return (
                        <>
                        <div className="flex">
                            <li className="self-start mb-3 font-thin xs:text-md"><button className="border border-dark-grey me-auto text-dirty-white bg-dark-grey rounded-full mr-2 px-2 mb-3 hover:bg-dark-grey hover:text-dirty-white  hover:font-semibold hover:px-3" onClick= {() =>{
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
            <p className="text-xs mb-5 font-light italic text-center tracking-wide">no playlist for me today, thanks</p>
          </div>
        </div>
        ): null}
    </div>
     { playlist ? (<div>
      {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1nN1vyVAWq06yNbc5W9y3L?utm_source=generator&theme=0" width="100%" height=“352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
     </div>): null}
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
 