import React from 'react';

import UsersList from '../UsersList/UsersList';

class PageUsers extends React.Component {
  render() {
    return (
      <div className="page page-users">
        <h1 className="h1">Users</h1>

        <UsersList />
      </div>
    )
  }
}

export default PageUsers;
