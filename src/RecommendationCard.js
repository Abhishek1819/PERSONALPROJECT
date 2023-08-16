import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-md-4 ">
      <div className="card shadow h-100">
        <div className="card-body serv backimg">
          <h4
            className="card-text text-danger"
            onClick={handleShow}
            style={{ cursor: "pointer" }}
          >
            {message.slice(0, 31)}...
          </h4>
          <p className="card-text text-light mb-0">{name}</p>
          <p className="card-text dark">
            {designation} at {company}
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="card-text">{message}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="card-text text-secondary mb-0">{name}</p>
          <img src={designation} alt={company} className="card-img-top rounded-circle" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RecommendationCard;
