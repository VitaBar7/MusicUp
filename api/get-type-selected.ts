import { GetTracksResponse, Artists } from './types'
import { request }  from './utils'

export const getSearch = async (userAccessToken:string, q:string, type:string):Promise<GetTracksResponse|Artists> => {
    return request('https://api.spotify.com/v1/search', {q:q, type: type, market: 'FR', limit: 18 }, userAccessToken)
}