import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './scenes/home/scenes/App';
import './scenes/home/styles/App.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
