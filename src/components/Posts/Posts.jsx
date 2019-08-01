import React from 'react';
import API from '../../helpers/API';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import Post from '../Post/Post';
import './Posts.css';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
      pageLimit: 10,
      loading: false,
      hasMore: true
    }
  }

  fetchData = (offset) => {
    const { users, posts, pageLimit } = this.state;
    const setOffset = offset ? offset : 0;
    API.get(`/posts?_start=${setOffset}&_limit=${pageLimit}`).then(res => {
      let getData = res.data;
      let setPosts = [];

      for (let i = 0; i < getData.length; i++) {
        let setUser = users.filter(item => {
          return item.id === getData[i].userId;
        });
        getData[i].userName = setUser[0].name;
        getData[i].userId = setUser[0].id;
        setPosts.push(getData[i]);
      }

      if (offset) {
        this.setState({ posts: posts.concat(getData) });
      } else {
        this.setState({ posts: setPosts });
      }
      
      if (getData.length === 0) {
        this.setState({ hasMore: false });
      }      
      
    });
  }

  fetchMoreData = () => {
    const { posts, pageLimit } = this.state;
    const sumLength = posts.length + pageLimit;

    this.setState({ loading: <h4>Loading...</h4> });
    this.fetchData(sumLength); 
  }

  async componentDidMount() {
    let getUser = await API.get('/users');
    let users = getUser.data;
    this.setState({ users });
    this.fetchData();
  }

  render() {
    const { posts, loading, hasMore } = this.state;
    return (
      <div>
        <h3 className="page-title">Post Terbaru</h3>
        <InfiniteScroll
            dataLength={posts.length}
            next={this.fetchMoreData}
            hasMore={hasMore}
            loader={loading}
            endMessage={<p>Yay! You have seen it all</p>}
          >
          <Post data={posts} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default Posts;