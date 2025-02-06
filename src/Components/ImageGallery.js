import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImageGallery = ({ images }) => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  return (
    <div className="image-gallery">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-4 mb-3" key={index}>
            <img
              src={image}
              alt="" // Alt left empty for decorative images
              className="img-fluid"
              style={{ cursor: "pointer" }}
              onClick={() => handleShow(image)}
            />
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          {currentImage && (
            <img
              src={currentImage}
              alt="" 
              className="img-fluid w-100"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageGallery;
