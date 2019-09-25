import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './_page_home.sass';

class PageHome extends React.Component {
  render() {
    return (
      <div className="page page-home">
        <p className="h1">Welcome!</p>

        {this.props.isAuthorised
          ? (
            <div className="links-list">
              <Link className="link" to="/users">
                <span className="icon icon-users"></span>
                <span className="text">Users List</span>
              </Link>

              <Link className="link" to="/profile">
                <span className="icon icon-user"></span>
                <span className="text">Personal page</span></Link>
            </div>
          )
          : <p>Please <Link to="/login">log in</Link> to use our site.</p>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthorised: state.user_reducer.isAuthorised
  }
}

export default connect(mapStateToProps)(PageHome);
