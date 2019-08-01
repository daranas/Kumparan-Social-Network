import React from 'react';
import API from '../../helpers/API';
import { Route } from "react-router-dom";
import './Main.css';
// components
import Sidebar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import User from '../User/User';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userDetail: {}
    }
  }

  async componentDidMount() {
    let getUser = await API.get('/users');
    let users = getUser.data;
    this.setState({ users });
  }

  render() {
    const { users, userDetail } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar 
              detail={userDetail}
              users={users} />
          </div>
          <div className="col-8">
            <Route path="/" exact component={Posts} />
            <Route path="/user/:id" component={User} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;