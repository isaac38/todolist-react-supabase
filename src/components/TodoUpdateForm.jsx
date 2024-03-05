import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useTodo } from "../context/TodoContext";

export const TodoUpdateForm = ({ id }) => {
  const { viewTodo, oneTodo, setOneTodo } = useTodo();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setOneTodo({});
  };

  const handleViewTodo = (id) => {
    viewTodo(id);
    handleShow();
  };

  return (
    <>
      <a
        className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        style={{ cursor: "pointer" }}
        onClick={() => handleViewTodo(id)}
      >
        <i className="fa-solid fa-pen"></i>
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{oneTodo.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{oneTodo.contenido}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
