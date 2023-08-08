
import { AuthContext } from '@component/context'
import { supabase } from '@component/utils/supabaseClient';
import { useContext, useState, useEffect } from 'react';


export default function Favorites () {
    const { userId, userAccessToken, isUserAuthenticated} = useContext(AuthContext)
    const [favorites, setFavorites] = useState(null)

    useEffect(() => {
        getUserFavorites(userId) 
        .then(()=>setFavorites)
    }, [userId])
    
    async function getUserFavorites(userId:string) {
      const { data, error } = await supabase
      .from('favorites')
      .select()
      .eq('user_id', userId)
      .order('id', { ascending: false })
      .limit(24)
    
      if(error) {
        console.log(error)
      }
    }


    return (
        <>
        </>
    )



}