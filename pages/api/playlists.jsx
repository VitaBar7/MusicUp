import { supabase } from '@component/utils/supabaseClient';


async function updateImage() {

  try {
    let { data: playlists, error } = await supabase
      .from('playlists')
      .update({ image: "https://github.com/VitaBar7/MusicUp/blob/dev/public/pexels-elijah-o'donnell-small.jpg" })
      .eq('id', 2)

    if (playlists) {
        console.log(playlists)
      }

    } catch (error) {
      console.log(error)
  }
}

updateImage();


/* const { data, error } = await supabase
  .from('playlists')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
 */

  
