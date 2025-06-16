import axios from 'axios';

interface AuthResponse {
  token: string;
  user: {
    email: string;
    username: string;
  };
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {
  username: string;
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signIn = async (data: SignInData): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/signin', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.detail || 'Failed to sign in');
    }
    throw new Error('Network error occurred');
  }
};

export const signUp = async (data: SignUpData): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/signup', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.detail || 'Failed to sign up');
    }
    throw new Error('Network error occurred');
  }
};

export default apiClient; 