import * as React from "react";
import "../styles/App.css";

import Card from "./Card";

import user from "../data/user-data";

import selfShot from "../img/self.jpg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Card user={user} creditImageUrl={String(selfShot)} />
      </div>
    );
  }
}

export default App;
