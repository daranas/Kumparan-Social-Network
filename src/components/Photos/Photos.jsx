import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImage from "react-modal-image";
import API from '../../helpers/API';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    let getPhotos = await API.get(`/photos?albumId=${params.id}`);
    let photos = getPhotos.data;

    this.setState({ photos});
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="row">
        {photos.map(photo =>
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
}

export default withRouter(Photos);