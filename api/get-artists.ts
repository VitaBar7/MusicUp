import request from "./utils"

export const getArtist = async (userAccessToken: string, query: string) => {
    return request('https://api.spotify.com/v1/search', {q: query, type: 'artist', limit: '12'}, userAccessToken)
}

export const getAlbums = async (userAccessToken: string, id: string|null) => {
    return request(`https://api.spotify.com/v1/artists/${id}/albums`, {type: 'album', limit: '24'}, userAccessToken)
}