export type GetTracksResponse = {
    tracks: {
      href: string, 
      items: Item[],
      name: string, 
      id: string
    }
}

export type GetUserInfoResponse = {
  id: string, 
  display_name:string,
  email: string

} 

export type GetAlbumInfo = {
  items: {
    artists: {
      name: string, 
      href:string
    },
    name:string,
    id:string,
    track_number:integer 
  }
}

export type Favorite = {
    artist_name: string,
    id?: number,
    image: string,
    spotify_id: string,
    track_name: string,
    user_id:string
  }
  

export type Item = 
{
    album: {
      name: string,
      images:Images[],
      artists: Artists[],
      id: string
    },
    name: string,
    id: string
}

export type Images = {      
    height: number,
    width: number,   
    url: string
}

export type Artists = {
    href: string,
    id: string,
    name: string,
    images: Images[],
    external_urls: {
      spotify: string
    }
}

export type GetTrack = {
  album: {
    name: string, 
    images: Images[]
  }
  name: string, 
  external_urls: {
    spotify: string
  },
  artists: Artists[],
  uri: string,
  id: string,
  label: string,
  genre: string[],
  album_groupe: string
}

export type Album = {
  name: string,
  images:Images[],
  artists: Artists[],
  id: string,
  release_date: string,
  external_urls: {
    spotify: string
  }
}

export type Playlist = {
  description:string, 
  name: string,
  external_urls: {
    spotify:string
  },
  id:string, 
  images:Images[],
  owner:{
    external_urls: {
      spotify: string
    },
    href:string,
    display_name:string
  }
  tracks:{
    total: integer, 
    items:Item[]
  }
}

export type Mood = {
  mood: string, 
  spotify_id:string
}