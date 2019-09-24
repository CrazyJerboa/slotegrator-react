import React from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import UsersList from './containers/UsersList/UsersList'

import './assets/sass/styles.sass';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 0
    }
  }

  componentDidMount() {
    this.setState({windowHeight: window.innerHeight});

    window.onresize = () => {
      this.setState({windowHeight: window.innerHeight});
    }
  }

  render() {
    return (
      <div className="outer" style={{minHeight:this.state.windowHeight}}>
        <Header />

        <div className="wrapper">
          <div className="section">
            <div className="container">
              <UsersList />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
