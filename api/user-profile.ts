import request from './utils'

export const getUserDisplayName = async (userAccessToken:string):Promise<string> => {
    return request('https://api.spotify.com/v1/me', {}, userAccessToken)
        .then(response => response.display_name)
        .catch(_ => "")
}