import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
