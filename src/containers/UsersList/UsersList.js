import React from 'react';

import * as ACTION_TYPES from '../../store/actions/ActionTypes';
import { getUsersList } from "../../Api";

import { connect } from 'react-redux';

import './_user_list.sass';

class UsersList extends React.Component {
  changeUserList = async () => {
    const api_url = await getUsersList()
      .then(function(data) {
        return data;
      });

    let result;

    if (api_url.ok) {
      let data = await api_url.json();
      result = data.results;
    } else {
      result = 'Something is broken, come back later ;)';
    }

    this.props.setUsersList(result);
  }

  componentDidMount() {
    this.changeUserList();
  }

  render() {
    const users_list = this.props.usersList;

    let users_list_result;

    if (typeof users_list === 'object') {
      users_list_result = users_list.map((user) =>
        <div key={user.login.uuid} className="element">
          <div className="img">
            <img src={user.picture.large} alt={user.name.first + ' ' + user.name.last} />
          </div>

          <p className="name">{user.name.first} {user.name.last}</p>
        </div>
      )
    } else {
      users_list_result = users_list;
    }

    return (
      <div>
        <div className="users-list">
          {users_list_result}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthorised: state.user_reducer.isAuthorised,
    usersList: state.user_reducer.usersList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsersList: (list) => {
      dispatch({
        type: ACTION_TYPES.USERS_LIST_SUCCESS,
        payload: list
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
