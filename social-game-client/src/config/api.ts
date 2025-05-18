export const API_BASE_URL = 'http://localhost:5020/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
  },
  USERS: {
    PROFILE: (id: string) => `${API_BASE_URL}/users/${id}`,
  },
}; 