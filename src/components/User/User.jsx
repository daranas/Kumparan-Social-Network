import React from 'react';
import API from '../../helpers/API';
import { Route, NavLink } from "react-router-dom";
// components
import Post from '../Post/Post';
import Albums from '../Albums/Albums';
import Photos from '../Photos/Photos';
import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      posts: [],
      albums: [],
      photos: []
    }
  }

  fetchPostData = (id) => {
    const { user } = this.state;
    const userId = id ? parseInt(id) : user.id;
    
    API.get(`/posts?userId=${userId}`).then(res => {
      let getData = res.data;
      let setPosts = [];

      for (let i = 0; i < getData.length; i++) {
        getData[i].userName = user.name;
        getData[i].userId = user.id;
        setPosts.push(getData[i]);
      }

      this.setState({ posts: setPosts });    
      
    });
  }

  fetchAlbumData = (id) => {
    API.get(`/albums?userId=${id}`).then(res => {
      let albums = res.data;
      this.setState({ albums });
    });
  }

  fetchPhotosData = (id) => {
    API.get(`/photos?albumId=${id}`).then(res => {
      let photos = res.data;
      this.setState({ photos });
    });
  }

  async componentDidUpdate(previousProps) {
    const { location: { pathname }, match: { params } } = this.props;
    if (previousProps.location.pathname !== pathname) {
      let getUser = await API.get(`/users/${params.id}`);
      let user = getUser.data;
      this.setState({ user });
      this.fetchPostData(params.id);
      this.fetchAlbumData(params.id);
      this.fetchPhotosData(params.id);
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    let getUser = await API.get(`/users/${params.id}`);
    let user = getUser.data;
    this.setState({ user });
    this.fetchPostData();
  }

  render() {
    const { user, posts, albums, photos } = this.state;
    return (
      <div className="user-panel">
        <ul className="nav nav-pills nav-kumparan clearfix">
          <li className="nav-item">
            <NavLink className="nav-link" to={`/user/${user.id}`} exact activeClassName="active">Post</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/user/${user.id}/albums`} activeClassName="active">Album Foto</NavLink>
          </li>
        </ul>

        <Route
          exact
          path='/user/:id'
          component={() => <Post data={posts} />}
        />
        <Route
          path='/user/:id/albums'
          component={() => <Albums data={albums} />}
        />
        <Route
          path='/user/:id/photos/:albumId'
          component={() => <Photos data={photos} />}
        />
      </div>
    );
  }
}

export default User;