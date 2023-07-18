import { supabase } from '@component/utils/supabaseClient';

export default async function UpdateTracks() {
//to delete a track
  const { data, error } = await supabase
  .from('last_tracks')
  .delete()
  .eq('spotify_id', '3pf96IFggfQuT6Gafqx2rt')


// to change a track's image
  /* const { error } = await supabase
    .from('last_tracks')
    .update({image: "https://i.scdn.co/image/ab67616d00001e0298260c528e6eec9dd431c1d7"})
    .eq('id' , 2)
    .select()
 */
}


