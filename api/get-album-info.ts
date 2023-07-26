import { request }  from './utils'
import { GetAlbumInfo } from './types'

export const getAlbumDetails = async (userAccessToken:string, id:string):Promise<GetAlbumInfo> => {
    return request(`https://api.spotify.com/v1/albums/${id}/tracks`, {} , userAccessToken)
}
 