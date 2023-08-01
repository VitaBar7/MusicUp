export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      favorites: {
        Row: {
          artist_name: string | null
          id: number
          image: string | null
          spotify_id: string | null
          track_name: string | null
          user_id: string | null
        }
        Insert: {
          artist_name?: string | null
          id?: number
          image?: string | null
          spotify_id?: string | null
          track_name?: string | null
          user_id?: string | null
        }
        Update: {
          artist_name?: string | null
          id?: number
          image?: string | null
          spotify_id?: string | null
          track_name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["spotify_id"]
          }
        ]
      }
      girls_rock: {
        Row: {
          band_name: string
          bio: string
          category: string
          discography: string
          id: number
          image: string | null
          video: string
        }
        Insert: {
          band_name: string
          bio: string
          category: string
          discography: string
          id?: number
          image?: string | null
          video: string
        }
        Update: {
          band_name?: string
          bio?: string
          category?: string
          discography?: string
          id?: number
          image?: string | null
          video?: string
        }
        Relationships: []
      }
      last_tracks: {
        Row: {
          artist_name: string | null
          id: number
          image: string | null
          search_date: string | null
          spotify_id: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          artist_name?: string | null
          id?: number
          image?: string | null
          search_date?: string | null
          spotify_id?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          artist_name?: string | null
          id?: number
          image?: string | null
          search_date?: string | null
          spotify_id?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "last_tracks_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["spotify_id"]
          }
        ]
      }
      playlists: {
        Row: {
          i_frame: string | null
          id: number
          image: string | null
          mood: string | null
          random_mode: boolean | null
          spotify_id: string
        }
        Insert: {
          i_frame?: string | null
          id?: number
          image?: string | null
          mood?: string | null
          random_mode?: boolean | null
          spotify_id: string
        }
        Update: {
          i_frame?: string | null
          id?: number
          image?: string | null
          mood?: string | null
          random_mode?: boolean | null
          spotify_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          id: number
          spotify_id: string
        }
        Insert: {
          id?: number
          spotify_id: string
        }
        Update: {
          id?: number
          spotify_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
