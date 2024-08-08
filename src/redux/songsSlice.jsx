import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    songs: [],
    searchResults: [],
    isLoading: false,
    error: null,
    success: null,
  },
  reducers: {
    // Get All Songs
    getSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = null;
      state.success = null;
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },

    // Update Song By Id
    updateSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    updateSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = action.payload.message;
      state.songs = action.payload;
    },
    updateSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },

    // Create Song Using Form-Data
    createSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = action.payload.message;
      state.songs = action.payload;
    },
    createSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },

    // Delete Song By Id
    deleteSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    deleteSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = action.payload.message;
      state.songs = action.payload;
    },
    deleteSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },

    // Delete All Songs
    deleteAllSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    deleteAllSongsSuccess: (state, action) => {
      state.songs = [];
      state.isLoading = false;
      state.error = null;
      state.success = null;
    },
    deleteAllSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },

    // Get Search Songs
    searchSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    searchSongsSuccess: (state, action) => {
      state.searchResults = action.payload;
      state.isLoading = false;
      state.error = null;
      state.success = null;
    },
    searchSongsFailure: (state, action) => {
      state.isLoading = false;
      state.searchResults = [];
      state.error = action.payload;
      state.success = null;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  createSongsFetch,
  createSongsSuccess,
  createSongsFailure,
  updateSongsFetch,
  updateSongsSuccess,
  updateSongsFailure,
  deleteSongsFetch,
  deleteSongsSuccess,
  deleteSongsFailure,
  deleteAllSongsFetch,
  deleteAllSongsSuccess,
  deleteAllSongsFailure,
  searchSongsFetch,
  searchSongsFailure,
  searchSongsSuccess,
} = songSlice.actions;

export default songSlice.reducer;
