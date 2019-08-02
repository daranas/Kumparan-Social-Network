import React from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../helpers/API';
import './PostDetail.css';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: []
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    let getPost = await API.get(`/posts/${params.id}`);
    let post = getPost.data;

    let getComments = await API.get(`/comments?postId=${params.id}`);
    let comments = getComments.data;

    this.setState({ post, comments });
  }
  
  render() {
    const { post, comments } = this.state;
    
    return (
      <div className="post-bar comment-bar">
        <div className="post-desc">
          <br/>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className="comment-wrapper">
          <h4>Komentar</h4>
          <ul class="comments">
          {comments.map(comment =>
            <li key={comment.id}>
              <div class="comment">
                <div class="comment-block">
                  <div class="comment-arrow"></div>
                  <span class="comment-by">
                    <strong>{comment.name}</strong>
                  </span>
                  <p>{comment.body}</p>
                </div>
              </div>
            </li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDetail);