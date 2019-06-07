// src/components/UserProfile.jsx
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>
          <div>Username: {this.props.userInfo.userName}</div>
          <div>Member Since: {this.props.userInfo.memberSince}</div>
          <Link to="/">View Account Balance</Link>
        </div>
    );
  }
}

export default UserProfile;