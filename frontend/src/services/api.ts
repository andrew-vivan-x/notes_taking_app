import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: (data: { user_name: string; user_email: string; password: string }) =>
    api.post('/auth/signup', data),
  signin: (email: string, password: string) =>
    api.post('/auth/signin', null, { params: { email, password } }),
};

export const notesAPI = {
  getNotes: () => api.get('/notes/'),
  getNote: (id: string) => api.get(`/notes/${id}`),
  createNote: (data: { note_title: string; note_content: string }) =>
    api.post('/notes/', data),
  updateNote: (id: string, data: { note_title?: string; note_content?: string }) =>
    api.put(`/notes/${id}`, data),
  deleteNote: (id: string) => api.delete(`/notes/${id}`),
};

export default api;