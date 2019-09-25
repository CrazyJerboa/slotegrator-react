import React from 'react';

import { connect } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';
import history from '../../utils/history';

class PageLogin extends React.Component {
  componentDidMount() {
    if (this.props.isAuthorised) {
      history.push('/profile');
    }
  }

  render() {
    return (
      <div className="page page-login">
        <h1 className="h1">Log in</h1>

        <LoginForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthorised: state.user_reducer.isAuthorised
  }
}

export default connect(mapStateToProps)(PageLogin);
