import React from 'react';

import { connect } from 'react-redux';
import history from '../../utils/history';

import * as ACTION_TYPES from '../../store/actions/ActionTypes';
import { getUserData } from "../../Api";

import UserInfo from '../../containers/UserInfo/UserInfo';

class PageProfile extends React.Component {
  getData = async () => {
    const api_url = await getUserData()
      .then(function(data) {
        return data;
      });

    let result;

    if (api_url.ok) {
      let data = await api_url.json();
      data = data.results[0];

      let data_date = new Date(data.dob.date);
      data_date = data_date.getDate() + '.' + (data_date.getMonth() + 1) + '.' + data_date.getFullYear();

      result = (
        <UserInfo
          id={data.login.uuid}
          login={data.login.username}
          name={data.name.first + ' ' + data.name.last}
          imgLink={data.picture.large}
          gender={data.gender}
          dob={data_date}
          age={data.dob.age}
          phone={data.phone}
          email={data.email}
          city={data.location.city}
          street={data.location.street}
        />
      );
    } else {
      result = 'Something is broken, come back later ;)';
    }

    this.props.setUserDataToStore(result);
    console.log(this.props.userData)
  }

  setLogout() {
    this.props.setLogoutSuccess();
    localStorage.removeItem('isAuthorised');
    history.push('/login');
  }

  componentDidMount() {
    if (!this.props.isAuthorised) {
      history.push('/login');
    } else {
      if (typeof this.props.userData === 'string') {
        this.getData();
      }
    }
  }

  render() {
    return (
      <div className="page page-users">
        <h1 className="h1">Profile <button className="button" onClick={this.setLogout.bind(this)}>Log out</button></h1>

        {this.props.userData}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthorised: state.user_reducer.isAuthorised,
    userData: state.user_reducer.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLogoutSuccess: () => dispatch({type: ACTION_TYPES.LOGOUT_SUCCESS}),

    setUserDataToStore: (data) => {
      dispatch({
        type: ACTION_TYPES.USER_INFO_SUCCESS,
        payload: data
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageProfile);
