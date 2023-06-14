import { supabase } from '@component/utils/supabaseClient';

export default async function UpdateTracks() {

  const { error } = await supabase
    .from('last_tracks')
    .update({ image: "https://i.scdn.co/image/ab67616d00001e0298260c528e6eec9dd431c1d7"})
    .eq('id' , 2)
    .select()

  
  console.log(last_tracks.image)
  return (
    {/* <div>
      {last_tracks?.map((item) => {
        return (
          <>
            <img key={item.id} src={item.image}/>
            <button onClick= {() => {UpdateTracks}}></button>
          </>
          )})}
    </div> */}
  )
}


