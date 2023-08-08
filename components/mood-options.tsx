import { supabase } from '@component/utils/supabaseClient'
import {useState, useEffect, useContext} from 'react'
import { getPlaylist } from '@component/api/get-playlist'
import { AuthContext } from '@component/context'
import {Playlist, Mood} from '@component/api/types'



export default function MoodOptions() {
    const[moodList, setMoodList] = useState<Mood[]>([])
    const [playlist, setPlaylist] = useState<Playlist>()
    const { userAccessToken } = useContext(AuthContext)

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

  return (
    <>
    <main className="flex min-h-screen bg-dirty-white flex-col items-center justify-between p-24">
        <div className=" bg-dark-green rounded-md font-sans font-thin m-auto px-24 pb-16">
            <h1 className="text-2xl italic font-light tracking-wide text-dirty-white m-10">Pick your mood!</h1>
            <ul className="text-dirty-white">
                {moodList?.map((mood) => {
                    return (
                        <>
                        <div className="flex">
                            
                            <li className="self-start mb-3"><button className="border me-auto text-dirty-white bg-dark-green rounded-full mr-2 px-2 mb-3 hover:bg-dirty-white hover:text-dark-green hover:px-3 hover:" onClick= {() =>{handleClick(mood.spotify_id)}}>&gt;</button> {mood.mood}
                            </li>
                        </div>
                        </>
                )}
                )}
            </ul>
        </div>

    </main>
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
 