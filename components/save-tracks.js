import { supabase } from '@component/utils/supabaseClient';


const { error } = await supabase
  .from('search')
  .insert({ spotify_id: {}})
