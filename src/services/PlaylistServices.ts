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

const deletePlaylist = async (id) => {
  try {
    const url = `/playlist/${id}`;
    const { data } = await apiClient.delete(url);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const addPlaylist = async (playlist) => {
  try {
    const url = `/playlist/`;
    const { data } = await apiClient.post(url, playlist);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updatePlaylistImage = async (playlist) => {
  try {
    const url = `/playlist/${playlist._id}`;
    const { data } = await apiClient.put(url, playlist);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const addTrackToPlaylist = async ({ trackId, id }) => {
  try {
    const url = `/playlist/${id}/${trackId}`;
    const { data } = await apiClient.post(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const PlaylistServices = {
  getPlaylist,
  getPublicPlaylist,
  getSinglePlaylist,
  deletePlaylist,
  addPlaylist,
  updatePlaylistImage,
  addTrackToPlaylist,
};

export default PlaylistServices;
