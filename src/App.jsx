import React from "react";
import Header from "./component/Header";
import SongList from "./component/SongList";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App";
const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <SongList />
      </div>
    </Provider>
  );
};

export default App;
