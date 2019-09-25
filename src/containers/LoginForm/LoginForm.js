import React from 'react';

import * as ACTION_TYPES from '../../store/actions/ActionTypes';
import { getUserAuthData } from "../../Api";
import history from '../../utils/history';

import { connect } from 'react-redux';

import './_login_form.sass';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      errorMsg: '',
      userLogin: '',
      inputLogin: '',
      userPassword: '',
      inputPassword: ''
    };
  }

  writeLogin(e) {
    this.setState({inputLogin: e.target.value});
  }
  writePassword(e) {
    this.setState({inputPassword: e.target.value});
  }

  tryToLogin(e) {
    e.preventDefault();

    let loginStatus = this.state.userLogin !== '' && this.state.userLogin === this.state.inputLogin;
    let passwordStatus = this.state.userPassword !== '' && this.state.userPassword === this.state.inputPassword;

    if (loginStatus && passwordStatus) {
      localStorage.setItem('isAuthorised', true);
      this.props.setAuthSuccess();
      history.push('/profile');
    } else {
      this.setState({ errorMsg: (<p className="error">Имя пользователя или пароль введены не верно</p>) });
    }
  }

  saveUserAuthData = async () => {
    const userAuthData = await getUserAuthData()
      .then(function(data) {
        return data;
      });

    if (userAuthData.ok) {
      let data = await userAuthData.json();

      this.setState({
        userLogin: data.login,
        userPassword: data.password
      });
    }
  }

  componentDidMount() {
    this.saveUserAuthData();
  }
  componentDidUnmpunt() {
    this.setState({
      userLogin: '',
      userPassword: ''
    });
  }

  render() {
    return (
      <div className="login-form__outer">
        <form className="login-form" onSubmit={this.tryToLogin.bind(this)}>
          <div className="form-element">
            <input type="text" placeholder="Login" value={this.state.inputLogin} onChange={this.writeLogin.bind(this)} />
          </div>

          <div className="form-element">
            <input type="password" placeholder="password" value={this.state.inputPassword} onChange={this.writePassword.bind(this)} />
          </div>

          <div className="submit-element">
            {this.state.errorMsg}
            <button className="button">Login</button>
          </div>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
