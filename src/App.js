import React from 'react';

import history from './utils/history';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import * as ACTION_TYPES from './store/actions/ActionTypes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import PageHome from './containers/PageHome/PageHome';
import PageLogin from './containers/PageLogin/PageLogin';
import PageUsers from './containers/PageUsers/PageUsers';
import PageProfile from './containers/PageProfile/PageProfile';

import './assets/sass/styles.sass';

class App extends React.Component {
  // использую React'овый state дабы не засорять store информаией о высоте экрана
  constructor() {
    super();

    this.state = {
      windowHeight: 0
    }
  }

  componentDidMount() {
    this.setState({windowHeight: window.innerHeight});

    window.onresize = () => {
      this.setState({windowHeight: window.innerHeight});
    }

    /* если в localstorage хранится инфа о том, что юзер авторизован - автоматом записываем соответствующее значение в store при перезагрузке страницы */
    if (localStorage.getItem('isAuthorised') !== null) {
      this.props.setAuthSuccess();
    }
  }

  render() {
    return (
      <div>

        <Router history={history}>

          <div className="outer" style={{minHeight:this.state.windowHeight}}>
            <Header />

            <div className="wrapper">
              <div className="section">
                <div className="container">

                  <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route path="/login" render={(props) => <PageLogin {...props} />} />
                    <Route path="/users" render={(props) => <PageUsers {...props} />} />
                    <Route path="/profile" render={(props) => <PageProfile {...props} />} />
                  </Switch>

                </div>
              </div>
            </div>

            <Footer />
          </div>

        </Router>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthorised: state.user_reducer.isAuthorised
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthSuccess: () => dispatch({type: ACTION_TYPES.LOGIN_SUCCESS})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
