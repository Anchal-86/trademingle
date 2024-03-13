import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MingleApp from "./Component/MingleApp";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MingleApp />
      </div>
    </Provider>
  );
}

export default App;
