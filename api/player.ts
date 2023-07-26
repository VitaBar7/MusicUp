import { putRequest }  from './utils'

export const playTrack = async (trackId: string, device_id: string, userAccessToken:string):Promise<void> => {
    const playerPayload : playTrackPayload = {
        uris: [ `spotify:track:${trackId}` ],
        position_ms: 0
    }
    await  putRequest(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        playerPayload,
        userAccessToken)
}

export const playPlayList = async (playlistId: string, device_id: string, userAccessToken:string):Promise<void> => {
    const playerPayload : playPlaylistPayload = {
        context_uri:  `spotify:playlist:${playlistId}`,
        position_ms: 0
    }
    await  putRequest(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        playerPayload,
        userAccessToken)
}

export const playAlbum = async (albumId:string, device_id: string, userAccessToken:string):Promise<void> => {
    const playerPayload : playAlbumPayload = {
        context_uri:  `spotify:album:${albumId}`,
        position_ms: 0
    }
    await  putRequest(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        playerPayload,
        userAccessToken)
}

type playTrackPayload =
    {
        uris: string[],
        position_ms: number,
    }

type playPlaylistPayload =
    {
        context_uri: string,
        position_ms: number,
    }

type playAlbumPayload = 
    {
        context_uri: string,
        position_ms: number,
    }