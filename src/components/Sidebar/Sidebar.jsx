import React from 'react';
import Users from '../Users/Users';
import { withRouter } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userDefault: {
        name: 'Darana SV',
        position: 'Kandidat Front-ent Engineer @kumparan'
      },
      userInfo: {}
    }
  }

  getDetailUser = (user, param) => {
    const { userDefault } = this.state;
    let userId = param.split("/").pop();
    let userParam = {
      name: '',
      position: ''
    }

    let setUser = user.filter(item => {
      return item.id === parseInt(userId);
    });
    
    if (userId) {
      userParam.name = setUser[0].name;
      userParam.position = setUser[0].company.name;
    } else {
      userParam = userDefault;
    }

    this.setState({ userInfo: userParam })
  }

  componentDidUpdate(previousProps) {
    const { users, location: { pathname } } = this.props;
    if (previousProps.location.pathname !== pathname) {
      this.getDetailUser(users, pathname);
    }
  }

  componentDidMount() {
    const { userDefault } = this.state;
    this.setState({ userInfo: userDefault })
  }

  render() {
    const { users } = this.props;
    const { userInfo } = this.state;
    
    return (
      <aside>
        <h4>{userInfo.name}</h4>
        <div className="kumparan-widget">
          <div className="widget-title">
            <h3>Daftar Pengguna</h3>
          </div>
          <Users data={users} />
        </div>
      </aside>
    );
  }
}

export default withRouter(Sidebar)