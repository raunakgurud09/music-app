import apiClient from '@/lib/apiClient';

const getUsers = async (): Promise<any> => {
  try {
    const url = '/admin/static/users';
    // const { data } = await apiClient.get(url, { headers: { Authorization: `Bearer ${token}` } })
    const { data } = await apiClient.get(url);
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

const UserServices = {
  getUsers,
};

export default UserServices;
