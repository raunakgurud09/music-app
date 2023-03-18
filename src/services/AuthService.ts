import apiClient from '@/lib/apiClient';

export const getMe = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get('/user/profile');
    const userData = {
      token: data.message,
      user: data.user,
    };
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const url = '/auth/login';
    const { data } = await apiClient.post(url, { email, password });
    const userData = {
      token: data.token,
      message: data.message,
    };
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (
  userId: string,
  userFields: any
): Promise<any> => {
  try {
    const url = `/user/upload-avatar`;
    console.log({ files: userFields });
    const { data } = await apiClient.post(url, { files: userFields });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<any> => {
  try {
    const url = '/auth/register';
    const { data } = await apiClient.post(url, { name, email, password });
    console.log(data.data);
    return data.data;
  } catch (error) {
    throw new error();
  }
};

export const verifyGoogleToken = async (idToken: string): Promise<any> => {
  try {
    const url = '/auth/google';
    const { data } = await apiClient.post(url, { idToken });
    console.log(data);
    return;
  } catch (error) {
    throw new error();
  }
};

const AuthService = {
  login,
  register,
  getMe,
  updateProfile,
  verifyGoogleToken,
};

export default AuthService;
