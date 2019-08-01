import React from 'react';
import { Link } from "react-router-dom";
import userDefault from '../../assets/images/user.png';
import './Users.css';

const Users = (props) => {
  return (
    <div className="user-listing">
      {props.data.map(user =>
      <Link to={`/user/${user.id}`} key={user.id}>
        <div className="user-list clearfix">
          <img src={userDefault} alt="" />
          <div className="user-name">
            <h4>{user.name}</h4>
            <span>{user.address.city}</span>
          </div>
          <span><i>&raquo;</i></span>
        </div>
      </Link>
      )}
    </div>
  )
}

export default Users;