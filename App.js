import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { LandingPage } from "./src/containers";

const App = () => (
  <Provider store={store}>
    <LandingPage />
  </Provider>
);

export default App;
