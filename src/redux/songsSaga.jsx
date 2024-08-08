import { put, takeEvery } from "redux-saga/effects";
import {
  createSongsFailure,
  createSongsSuccess,
  deleteAllSongsFailure,
  deleteAllSongsSuccess,
  deleteSongsFailure,
  deleteSongsSuccess,
  getSongsFailure,
  getSongsSuccess,
  searchSongsFailure,
  searchSongsSuccess,
  updateSongsFailure,
  updateSongsSuccess,
} from "./songsSlice";

import {
  getSongsAPI,
  deleteSongByIdAPI,
  updateSongAPI,
  createSongAPI,
  deleteSongsAPI,
  getSearchSongsAPI,
} from "../api/index";
export function* getSongsSaga() {
  try {
    const songs = yield getSongsAPI();
    yield put(getSongsSuccess(songs.data));
  } catch (err) {
    yield put(getSongsFailure(err.message));
  }
}

export function* deleteSongSaga(action) {
  try {
    const song = yield deleteSongByIdAPI(action.payload);
    yield put(deleteSongsSuccess(song.data));
    console.log(song);
  } catch (error) {
    yield put(deleteSongsFailure(error.response.data.message));
  }
}

export function* updateSongSaga(action) {
  const { _id, data } = action.payload;

  try {
    const updatedSong = yield updateSongAPI(_id, data);
    yield put(updateSongsSuccess(updatedSong.data));
  } catch (error) {
    yield put(updateSongsFailure(error.response.data.message));
  }
}
export function* createSongSaga(action) {
  try {
    const createMessage = yield createSongAPI(action.payload);
    yield put(createSongsSuccess(createMessage.data));
  } catch (error) {
    yield put(createSongsFailure(error));
  }
}
export function* deleteAllSongSaga() {
  try {
    const createMessage = yield deleteSongsAPI();
    yield put(deleteAllSongsSuccess(createMessage.data.message));
  } catch (error) {
    yield put(deleteAllSongsFailure(error));
  }
}
export function* searchSongsSaga(action) {
  try {
    const searchResults = yield getSearchSongsAPI(action.payload);
    yield put(searchSongsSuccess(searchResults.data));
  } catch (error) {
    console.log(error);
    yield put(searchSongsFailure(error.response.data.message));
  }
}

export function* songSaga() {
  yield takeEvery("song/getSongsFetch", getSongsSaga);
  yield takeEvery("song/deleteSongsFetch", deleteSongSaga);
  yield takeEvery("song/updateSongsFetch", updateSongSaga);
  yield takeEvery("song/createSongsFetch", createSongSaga);
  yield takeEvery("song/deleteAllSongsFetch", deleteAllSongSaga);
  yield takeEvery("song/searchSongsFetch", searchSongsSaga);
}
