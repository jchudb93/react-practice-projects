import * as React from 'react';
import './../styles/App.css';

import SearchBar from '../components/SearchBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SearchBar/>
        {/* <WeatherList/> */}
      </div>
    );
  }
}

export default App;
