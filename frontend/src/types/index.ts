export interface User {
  user_id: string;
  user_name: string;
  user_email: string;
  created_on: string;
}

export interface Note {
  note_id: string;
  note_title: string;
  note_content: string;
  user_id: string;
  last_update: string;
  created_on: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface CreateNoteData {
  note_title: string;
  note_content: string;
}

export interface UpdateNoteData {
  note_title?: string;
  note_content?: string;
}