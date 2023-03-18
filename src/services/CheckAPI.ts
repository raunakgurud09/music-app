import apiClient from '@/lib/apiClient';

export const check = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get('/');
    return data.status;
  } catch (error) {
    console.log(error);
    return;
  }
};

const CheckAPI = {
  check,
};

export default CheckAPI;
