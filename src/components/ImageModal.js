import React from "react";
import PropTypes from "prop-types";

class ImageModal extends React.Component {
  hideImage = () => {
    this.props.viewImageModal(false, null);
  };

  render() {
    return (
      <div
        className="image-modal"
        style={{ display: this.props.display ? "flex" : "none" }}
        onClick={this.hideImage}
      >
        <img
          src={this.props.src}
          alt={this.props.src}
          className="image-modal__image"
        />
      </div>
    );
  }
}

ImageModal.propTypes = {
  viewImageModal: PropTypes.func,
  display: PropTypes.bool,
  src: PropTypes.string
};

export default ImageModal;
