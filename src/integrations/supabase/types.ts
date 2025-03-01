export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      asado_registrations: {
        Row: {
          additional_info: string | null
          allergies: string | null
          created_at: string
          diet_preference: Database["public"]["Enums"]["diet_preference"]
          email: string
          full_name: string
          guests: string | null
          help_organize: boolean
          id: string
          phone: string
        }
        Insert: {
          additional_info?: string | null
          allergies?: string | null
          created_at?: string
          diet_preference: Database["public"]["Enums"]["diet_preference"]
          email: string
          full_name: string
          guests?: string | null
          help_organize?: boolean
          id?: string
          phone: string
        }
        Update: {
          additional_info?: string | null
          allergies?: string | null
          created_at?: string
          diet_preference?: Database["public"]["Enums"]["diet_preference"]
          email?: string
          full_name?: string
          guests?: string | null
          help_organize?: boolean
          id?: string
          phone?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string
          created_by: string | null
          date: string
          description: string
          id: string
          location: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          date: string
          description: string
          id?: string
          location: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          date?: string
          description?: string
          id?: string
          location?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string
          id: string
          message: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      pre_registrations: {
        Row: {
          about: string | null
          age: number
          contact_method: Database["public"]["Enums"]["contact_method"]
          created_at: string
          email: string
          first_name: string
          id: string
          interests: string[]
          languages: string[]
          last_name: string
          nationality: string
          other_contact_details: string | null
          other_interests: string | null
        }
        Insert: {
          about?: string | null
          age: number
          contact_method?: Database["public"]["Enums"]["contact_method"]
          created_at?: string
          email: string
          first_name: string
          id?: string
          interests?: string[]
          languages?: string[]
          last_name: string
          nationality: string
          other_contact_details?: string | null
          other_interests?: string | null
        }
        Update: {
          about?: string | null
          age?: number
          contact_method?: Database["public"]["Enums"]["contact_method"]
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          interests?: string[]
          languages?: string[]
          last_name?: string
          nationality?: string
          other_contact_details?: string | null
          other_interests?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          about: string | null
          age: number
          contact_method: Database["public"]["Enums"]["contact_method"] | null
          first_name: string
          id: string
          interests: string[] | null
          languages: string[] | null
          last_name: string
          nationality: string
          other_contact_details: string | null
          other_interests: string | null
        }
        Insert: {
          about?: string | null
          age: number
          contact_method?: Database["public"]["Enums"]["contact_method"] | null
          first_name: string
          id: string
          interests?: string[] | null
          languages?: string[] | null
          last_name: string
          nationality: string
          other_contact_details?: string | null
          other_interests?: string | null
        }
        Update: {
          about?: string | null
          age?: number
          contact_method?: Database["public"]["Enums"]["contact_method"] | null
          first_name?: string
          id?: string
          interests?: string[] | null
          languages?: string[] | null
          last_name?: string
          nationality?: string
          other_contact_details?: string | null
          other_interests?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          description: string
          email: string
          id: string
          name: string
          website: string
        }
        Insert: {
          created_at?: string
          description: string
          email: string
          id?: string
          name: string
          website: string
        }
        Update: {
          created_at?: string
          description?: string
          email?: string
          id?: string
          name?: string
          website?: string
        }
        Relationships: []
      }
      resources: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          id: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          id?: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          id?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      sponsors: {
        Row: {
          company: string
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          company: string
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          company?: string
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          user_id: string
          required_role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "normal" | "moderator" | "admin"
      contact_method: "email" | "whatsapp" | "telegram" | "other"
      diet_preference: "carne" | "vegetariana" | "vegana"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
