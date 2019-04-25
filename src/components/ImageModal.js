import React from 'react';

class ImageModal extends React.Component {

  hideImage = () => {
    this.props.viewImageModal(false, null);
  }

  render () {
    return (
      <div className="image-modal" style={{display: this.props.display ? 'flex' : 'none'}} onClick={this.hideImage}>
        <img src={this.props.src} className="image-modal__image"></img>
      </div>
    )
  }
}

export default ImageModal