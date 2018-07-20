import * as React from 'react';
import './styles/Home'

class Home extends React.PureComponent {
  public render() {
    return (
      <header className="Home-header">
					<i className="fa fa-shopping-basket fa-6" aria-hidden="true"></i>
      </header>
    );
  }
}

export default Home;