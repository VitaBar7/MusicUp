import { supabase } from '@component/utils/supabaseClient'
import {useState, useEffect, useContext} from 'react'
import { getPlaylist } from '@component/api/get-playlist'
import { AuthContext } from '@component/context'
import {Playlist, Mood} from '@component/api/types'



export default function MoodOptions() {
    const[moodList, setMoodList] = useState<Mood[]>([])
    const [playlist, setPlaylist] = useState<Playlist>()
    const { userAccessToken } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false);

   useEffect(() => {
    console.log(playlist)
   }, [playlist])

    useEffect(() => {
        getMoodList().then((playlists)=> {
            const temporaryMoodList:Mood[] = []
            
            playlists.playlists?.map((mood:Mood) => {
                console.log(mood)
                temporaryMoodList.push(mood)
            })
            setMoodList(temporaryMoodList)    
    }) 
    }, [])

    const handleClick = (id:string) => {
        //console.log(id)
        if(id) {
            getPlaylist(userAccessToken, id)
            .then(response => {
              setPlaylist(response)
              console.log(response)
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
      {!showModal ? (<button id="sticky" className="z-999 fixed top-40 whitespace-pre-line bg-orange/80 text-white rounded-full h-28 w-28 p-4 self-end hover:cursor-pointer shadow hover:opacity-75 transition" style={{height: '200'}} onClick={() => setShowModal(true)}>
        How is <br></br>your mood?
      </button>): null}
      <div className="flex md:flex-col justify-center items-center sticky top-40 sm:mt-2 xs:top-16 ">
       {showModal ? (<div className="bg-dark-grey/80 z-12 mt-4 sm:mt-2 xs:mt-2 text-thin rounded-md font-sans m-auto ">
          <h1 className="text-2xl tracking-wide italic font-thin text-white whitespace-pre-line m-10 mt-12 sm:text-xl xs:text-lg">Pick your mood to get the right playlist!</h1> 
          <div className="flex flex-col space-between">
            <ul className="text-dirty-white px-24 xs:px-10 pt-5 pb-6 hover:backdrop-blur-2xl">
                {moodList?.map((mood) => {
                    return (
                        <>
                        <div className="flex">   
                            <li className="self-start mb-3 font-thin xs:text-md"><button className="border border-white me-auto text-dirty-white bg-dark-grey rounded-full mr-2 px-2 mb-3 hover:bg-dirty-white hover:text-dark-grey hover:font-semibold hover:px-3" onClick= {() =>{handleClick(mood.spotify_id)}}>&gt;</button> {mood.mood}
                            </li>
                        </div>
                        </>
                    )}
                )}
            </ul>
            <button className="bg-close-icon bg-white bg-center bg-invert text-white rounded-full w-10 h-10 bg-no-repeat m-auto my-2 hover:border hover:border-dark-grey hover:rotate-45" onClick={() => setShowModal(false)}></button>
            <p className="text-xs mb-2 font-light italic text-center tracking-wide">no playlist for me today, thanks</p>
          </div>
           {/*  <button
              className="my-5 w-auto m-auto px-8 h-10 font-normal text-sm italic text-grey rounded-xl shadow hover:shadow-lg hover:text-orange hover:flex-end"
              onClick={() => setShowModal(false)}>
              Thanks, but no playlist today
            </button> */}
        </div>
        ): null}
    </div>
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
 