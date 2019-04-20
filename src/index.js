import React from "react";
import { render } from "react-dom";
import Table from "./App";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  fontSize: 16
};

const App = () => (
  <div style={styles}>
    <Table />
  </div>
);

render(<App />, document.getElementById("root"));
