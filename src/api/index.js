import axios from "axios";

axios.defaults.baseURL = "https://test-songs.onrender.com";

export const getSongsAPI = async () => axios.get("/api/songs");

export const getSongByIdAPI = async (id) => axios.get(`/api/songs/${id}`);
export const getSearchSongsAPI = async (query) =>
  axios.get(`/api/songs/search?q=${query}`);

export const createSongAPI = async (song) => axios.post(`/api/songs`, song);

export const updateSongAPI = async (id, song) =>
  axios.put(`/api/songs/${id}`, song);

export const deleteSongByIdAPI = async (id) => axios.delete(`/api/songs/${id}`);

export const deleteSongsAPI = async () => axios.delete(`/api/songs`);
