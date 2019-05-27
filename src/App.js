import React from "react";
import "./App.scss";

// try inline first
// object
// css then
// convert to scss
//npm install node-sass
// how to commnet

const nameStyle = {
  color: "gray",
  border: "1px solid gray",
  width: "300px",
  paddingTop: "5px",
  paddingBottom: "5px"
};

const nameTagStyle = {
  color: "white",
  border: "initial"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ ...nameStyle, ...nameTagStyle }}>Name List</h1>
        <h3 style={nameStyle}>Peter</h3>
        <h3 style={nameStyle}>John</h3>
        <h3 style={nameStyle}>Jill</h3>

        {/* <h1 className="title">Name List</h1>
        <h3 className="name">Peter</h3>
        <h3 className="name">John</h3>
        <h3 className="name">Jill</h3> */}
      </header>
    </div>
  );
}

export default App;
