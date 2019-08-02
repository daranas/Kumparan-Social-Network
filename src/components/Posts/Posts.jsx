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

  handleSubmit = (e) => {
    e.preventDefault();

    const { posts } = this.state;
    let post = {
      'id': 1,
      'userId': 1,
      'userName': 'DaranaSV',
      'title': e.target.postTitle.value,
      'body': e.target.postBody.value
    };

    let setPost = JSON.parse(JSON.stringify(posts))
    setPost[0] = post;
    this.setState({
      posts: setPost 
    })

    e.target.postTitle.value = '';
    e.target.postBody.value = '';
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
        <form action="" className="create-post" onSubmit={this.handleSubmit}>
          <input type="text" name="postTitle" placeholder="Judul Artikel" required />
          <textarea name="postBody" placeholder="Apa yang Anda pikirkan?" required></textarea>
          <button type="submit">submit</button>
        </form>
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