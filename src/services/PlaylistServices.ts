import apiClient from '@/lib/apiClient';

const getPlaylist = async () => {
  try {
    const url = `/playlist/me`;
    const { data } = await apiClient.get(url);
    return data.data.playlists;
  } catch (error) {
    console.log(error);
  }
};

const getPublicPlaylist = async () => {
  try {
    const url = `/playlist`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const getSinglePlaylist = async (id) => {
  try {
    const url = `/playlist/${id}`;
    const { data } = await apiClient.get(url);
    return data.data.playlist;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const PlaylistServices = {
  getPlaylist,
  getPublicPlaylist,
  getSinglePlaylist,
};

export default PlaylistServices;
