import React from 'react';
import { Link } from "react-router-dom";
import userDefault from '../../assets/images/user.png';
import './Post.css';

const Post = (props) => {

  return (
    props.data.map(post =>
    <div className="post-bar" key={post.id}>
      <div className="post-header clearfix">
        <div className="user-info">
          <img src={userDefault} alt="" />
          <div className="user-name">
          <Link to={`/user/${post.userId}`}>
            <h3>{post.userName}</h3>
          </Link>
          </div>
        </div>
      </div>
      <div className="post-desc">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div className="post-footer">
        <Link to={`/user/${post.userId}/post/${post.id}`}>selengkapnya &raquo;</Link>
      </div>
    </div>
    )
  )
}

export default Post;