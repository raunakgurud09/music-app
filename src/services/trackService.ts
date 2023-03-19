import apiClient from '@/lib/apiClient';

const getMyTracks = async () => {
  try {
    const url = '/track/me';
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const addTrack = async (track) => {
  try {
    const url = `/track`;
    const { data } = await apiClient.post(url, track);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const updateMetaTrack = async (track) => {
  try {
    const url = `/track/${track._id}`;
    const { data } = await apiClient.put(url, track);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTrack = async (trackId) => {
  try {
    const url = `/track/${trackId}`;
    const { data } = await apiClient.delete(url);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const metaAddTrack = async (track) => {
  try {
    const url = `/track/${track.id}`;
    const { data } = await apiClient.put(url, track);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const imageAddTrack = async (track) => {
  try {
    const url = `/track/${track.id}/image`;
    const { data } = await apiClient.post(url, track);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const audioAddTrack = async (track) => {
  try {
    const url = `/track/${track.id}/audio`;
    const { data } = await apiClient.post(url, track);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const TrackServices = {
  getMyTracks,
  addTrack,
  updateMetaTrack,
  deleteTrack,
  metaAddTrack,
  imageAddTrack,
  audioAddTrack
};

export default TrackServices;
