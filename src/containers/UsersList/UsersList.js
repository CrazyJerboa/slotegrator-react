import React from 'react';

import * as ACTION_TYPES from '../../store/actions/ActionTypes';
import * as ACTIONS from '../../store/actions/Actions';

// import { getUsersList, getUserData } from "../../Api";

import { connect } from 'react-redux';

class UsersList extends React.Component {
  testFunc = async () => {
    const api_url = await fetch(`https://randomuser.me/api/?results=10&seed=abc`);

    const data = await api_url.json();

    this.props.setUsersList(data.results);
  }

  componentDidMount() {
    this.testFunc();
  }

  render() {


    return (
      <div>
        <button onClick={() => console.log(this.props)}>test 2</button>

        <hr/>

        <ul className="users-list">
          {typeof this.props.users_list_state === 'object'? this.props.users_list_state.map((user) =>
            <li key={user.id.value}>
              {user.name.first} {user.name.last}
            </li>
          ) : 'Loading...'}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthorised: state.user_reducer.isAuthorised,
    users_list_state: state.user_reducer.users_list_state
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
