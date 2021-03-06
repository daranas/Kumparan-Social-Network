import React from 'react';
import Users from '../Users/Users';
import { withRouter } from 'react-router-dom';
import profilePict from '../../assets/images/user.png';
import './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDefault: {
        name: 'DaranaSV',
        position: 'Kandidat Front-end Engineer @kumparan'
      },
      userInfo: {}
    }
  }

  getDetailUser = (user, param) => {
    const { userDefault } = this.state;
    let userId = param.split(/\//)[2];
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

  async componentDidUpdate(previousProps) {
    const { users, location: { pathname } } = this.props;
    if (previousProps.location.pathname !== pathname) {
      this.getDetailUser(users, pathname);
    }
  }

  async componentDidMount() {
    const { userDefault } = this.state;
    this.setState({ userInfo: userDefault })
  }

  render() {
    const { users } = this.props;
    const { userInfo } = this.state;
    
    return (
      <aside>
        <div className="user-profile">
          <div className="user-bg">
            <div className="user-pict">
              <img src={profilePict} alt="" />
            </div>
          </div>
          <div className="user-specs">
            <h3>{userInfo.name}</h3>
            <span>{userInfo.position}</span>
          </div>
        </div>
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

export default withRouter(Sidebar);