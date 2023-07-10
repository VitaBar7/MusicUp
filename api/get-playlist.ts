import { Playlist } from './types'
import { request }  from './utils'

export const getPlaylist = async (userAccessToken:string, id:string):Promise<Playlist> => {
    return request(`https://api.spotify.com/v1/playlists/${id}`, {id, market:'fr'}, userAccessToken)
}