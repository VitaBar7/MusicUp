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
      last_tracks: {
        Row: {
          artist_name: string | null
          id: number
          image: string | null
          search_date: string | null
          spotify_id: string | null
          title: string | null
        }
        Insert: {
          artist_name?: string | null
          id?: number
          image?: string | null
          search_date?: string | null
          spotify_id?: string | null
          title?: string | null
        }
        Update: {
          artist_name?: string | null
          id?: number
          image?: string | null
          search_date?: string | null
          spotify_id?: string | null
          title?: string | null
        }
        Relationships: []
      }
      playlists: {
        Row: {
          id: number
          image: string | null
          mood: string | null
          random_mode: boolean | null
          spotify_id: string
        }
        Insert: {
          id?: number
          image?: string | null
          mood?: string | null
          random_mode?: boolean | null
          spotify_id: string
        }
        Update: {
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
      top_tracks: {
        Row: {
          artist_name: string | null
          id: number
          spotify_id: string | null
          times_played: string | null
          track_image: string | null
          track_name: string | null
        }
        Insert: {
          artist_name?: string | null
          id?: number
          spotify_id?: string | null
          times_played?: string | null
          track_image?: string | null
          track_name?: string | null
        }
        Update: {
          artist_name?: string | null
          id?: number
          spotify_id?: string | null
          times_played?: string | null
          track_image?: string | null
          track_name?: string | null
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
