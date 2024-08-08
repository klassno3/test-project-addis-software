import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songsSlice";
import createSagaMiddleware from "redux-saga";
import { songSaga } from "./songsSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { songs: songReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
        ignoreState: true,
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(songSaga);
