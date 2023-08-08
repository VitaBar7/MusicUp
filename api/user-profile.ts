import { GetUserInfoResponse } from './types'
import { request }  from './utils'

export const getUserInfo = async (userAccessToken:string):Promise<GetUserInfoResponse> => {
    return request('https://api.spotify.com/v1/me', {}, userAccessToken)
        .then(response => response)
        .catch(_ => "")
}