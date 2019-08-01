import React from 'react';
import API from '../../helpers/API';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    // get user
    let getUser = await API.get(`/users/${params.id}`);
    let user = getUser.data;
    this.setState({ user });
  }

  render() {
    return (
      <h1>User {this.props.match.params.id}</h1>
    );
  }
}

export default User;