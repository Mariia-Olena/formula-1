export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      allDrivers: {
        Row: {
          allDrivers: string[] | null;
          id: number;
        };
        Insert: {
          allDrivers?: string[] | null;
          id?: number;
        };
        Update: {
          allDrivers?: string[] | null;
          id?: number;
        };
        Relationships: [];
      };
      champions: {
        Row: {
          champions:
            | {
                [key: number]: {
                  name: string;
                  constructor: string;
                };
              }[]
            | null;
          id: number;
        };
        Insert: {
          champions?: Json[] | null;
          id?: number;
        };
        Update: {
          champions?: Json[] | null;
          id?: number;
        };
        Relationships: [];
      };
      constructors: {
        Row: {
          driver1: number | null;
          driver2: number | null;
          firstGrandPrix: string | null;
          id: number;
          name: string | null;
          nation: string | null;
          worldChampion: number[] | null;
          worldChampionship: Json[] | null;
        };
        Insert: {
          driver1?: number | null;
          driver2?: number | null;
          firstGrandPrix?: string | null;
          id?: number;
          name?: string | null;
          nation?: string | null;
          worldChampion?: number[] | null;
          worldChampionship?: Json[] | null;
        };
        Update: {
          driver1?: number | null;
          driver2?: number | null;
          firstGrandPrix?: string | null;
          id?: number;
          name?: string | null;
          nation?: string | null;
          worldChampion?: number[] | null;
          worldChampionship?: Json[] | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_constructors_driver1_fkey';
            columns: ['driver1'];
            isOneToOne: false;
            referencedRelation: 'drivers';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_constructors_driver2_fkey';
            columns: ['driver2'];
            isOneToOne: false;
            referencedRelation: 'drivers';
            referencedColumns: ['id'];
          }
        ];
      };
      drivers: {
        Row: {
          BestGridPosition: number | null;
          'BestResult ': number | null;
          fastestLaps: Json | null;
          firstGP: string | null;
          firstName: string | null;
          grandSlams: number | null;
          hatTricks: number | null;
          id: number;
          kmLed: number | null;
          kmRaced: number | null;
          lapsLed: number | null;
          lapsRaced: number | null;
          lastName: string | null;
          nation: string | null;
          podiums: Json | null;
          points: number | null;
          polePositions: Json | null;
          retirements: Json | null;
          wins: Json | null;
          worldChampionIn: number[] | null;
        };
        Insert: {
          BestGridPosition?: number | null;
          'BestResult '?: number | null;
          fastestLaps?: Json | null;
          firstGP?: string | null;
          firstName?: string | null;
          grandSlams?: number | null;
          hatTricks?: number | null;
          id?: number;
          kmLed?: number | null;
          kmRaced?: number | null;
          lapsLed?: number | null;
          lapsRaced?: number | null;
          lastName?: string | null;
          nation?: string | null;
          podiums?: Json | null;
          points?: number | null;
          polePositions?: Json | null;
          retirements?: Json | null;
          wins?: Json | null;
          worldChampionIn?: number[] | null;
        };
        Update: {
          BestGridPosition?: number | null;
          'BestResult '?: number | null;
          fastestLaps?: Json | null;
          firstGP?: string | null;
          firstName?: string | null;
          grandSlams?: number | null;
          hatTricks?: number | null;
          id?: number;
          kmLed?: number | null;
          kmRaced?: number | null;
          lapsLed?: number | null;
          lapsRaced?: number | null;
          lastName?: string | null;
          nation?: string | null;
          podiums?: Json | null;
          points?: number | null;
          polePositions?: Json | null;
          retirements?: Json | null;
          wins?: Json | null;
          worldChampionIn?: number[] | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never;
