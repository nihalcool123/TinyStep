import React from "react";
import ReactDOM from "react-dom";
import InitialForm from "./components/InitialForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <InitialForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
