import React from 'react';

import './_user_info.sass';

const UserInfo = (props) => (
  <div className="user-info" id={props.id}>
    <div className="user-info__top">
      <div className="col col-left">
        <div className="user-info__img">
          <img src={props.imgLink} alt=""/>
        </div>

        <div className="user-info__age">
          <p className="user-info__gender">{props.gender == "male" ? (<span className="icon icon-gender_male"></span>) : (<span className="icon icon-gender_female"></span>)} {props.age} years</p>
          <p className="user-info__dob">{props.dob}</p>
        </div>
      </div>

      <div className="col col-right">
        <p className="user-info__name">{props.name}</p>
        <p className="user-info__login">{props.login}</p>
      </div>
    </div>

    <div className="user-info__contacts">
      <h2>Contacts:</h2>

      <div className="list">
        <div className="element phone">
          <p className="label">Phone:</p>

          <p className="value"><a href={'tel:'+props.phone}>{props.phone}</a></p>
        </div>

        <div className="element email">
          <p className="label">E-mail:</p>

          <p className="value"><a href={'mailto:'+props.email}>{props.email}</a></p>
        </div>

        <div className="element address">
          <p className="label">Address:</p>

          <p className="value">{props.city}, {props.street}</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserInfo;
