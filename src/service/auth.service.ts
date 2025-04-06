import request from './index';

export const login = async (data: {
  username: string;
  password: string;
  expiresInMins?: number;
}) => {
  try {
    const response = await request.post('/auth/login', data);

    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
