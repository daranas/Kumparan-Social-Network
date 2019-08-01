import React from 'react';
import ModalImage from "react-modal-image";

const Photos = props => {

  return (
    <div className="row">
      {props.data.map(photo =>
      <div className="col-3" key={photo.id}>
        <div className="grid-photo">
          <ModalImage
            small={photo.thumbnailUrl}
            large={photo.url}
            alt={photo.title}
          />
        </div>
      </div>
      )}
    </div>
  );
}

export default Photos;