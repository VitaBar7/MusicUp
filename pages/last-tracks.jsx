import  GetLastTracks from '@component/components/last-tracks'
import getServerSideProps from '@component/components/last-tracks'
import { supabase } from '@component/utils/supabaseClient';



export default function LastTracks() {
    return ( 
        <GetLastTracks/>
    )
}

