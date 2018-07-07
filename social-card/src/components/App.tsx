import * as React from "react";
import "../styles/App.css";

import Card from "./Card";

import user from "../data/user-data";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Card user={user}/>
      </div>
    );
  }
}

export default App;
