import { putRequest }  from './utils'

export const playTrack = async (trackId: string, device_id: string, userAccessToken:string):Promise<void> => {
    const userDisplayNamePayload : playTrackPayload = {
        uris: [ `spotify:track:${trackId}` ],
        position_ms: 0
    }
    await  putRequest(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        userDisplayNamePayload,
        userAccessToken)
}

export const playPlayList = async (playlistId: string, device_id: string, userAccessToken:string):Promise<void> => {
    const userDisplayNamePayload : playPlaylistPayload = {
        context_uri:  `spotify:playlist:${playlistId}`,
        position_ms: 0
    }
    await  putRequest(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        userDisplayNamePayload,
        userAccessToken)
}

export const playAlbum = async (albumId:string, device_id: string, userAccessToken:string):Promise<void> => {
    const userDisplayNamePayload : playAlbumPayload = {
        context_uri:  `spotify:playlist:${albumId}`,
        position_ms: 0
    }
    await  putRequest(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        userDisplayNamePayload,
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