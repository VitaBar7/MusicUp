import { supabase } from '@component/utils/supabaseClient';



async function updateImage() {

  try {
    let { data: playlists, error } = await supabase
      .from('playlists')
      .update({ image: "https://i.scdn.co/image/ab67616d00001e02f4f1f36551dd41c5442c2a2f" })
      .eq('id', 3)

    } catch (error) {
      console.log(error)
  }
}

//updateImage();


  
