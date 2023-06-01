
import { GetTrack, GetTracksResponse } from './types'
import request from './utils'

export const getTracks = async (userAccessToken:string, q:string):Promise<GetTracksResponse> => {
    return request('https://api.spotify.com/v1/search', {q:q, type: 'track', market: 'FR', limit: 24 }, userAccessToken)
}

export const getTrackDetails = async (userAccessToken:string, id:string):Promise<GetTrack> => {
    return request(`https://api.spotify.com/v1/tracks/${id}`, {} , userAccessToken)
}
 