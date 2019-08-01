import React from 'react';
import { Link } from "react-router-dom";
import imgDefault from '../../assets/images/default.jpg';
import './Albums.css';

const Albums = props => {
  return (
    props.data.map(album =>
      <Link to={`/user/${album.userId}/photos/${album.id}`} key={album.id}>
        <div className="album-thumb">
          <img src={imgDefault} alt="" />
          <p>{album.title}</p>
        </div>
      </Link>
    )
  )
}

export default Albums;