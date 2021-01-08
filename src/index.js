import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import BoxCon from "./components/container";
import Header from "./components/header";
import Blog from "./components/blog";
import "./index.css";

//Creating Redux Store to store the states
let store = createStore(reducers, applyMiddleware(thunk));

//Component for final display on screen
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BoxCon />
        <Blog />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
