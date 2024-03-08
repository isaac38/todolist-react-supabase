import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useTodo } from "../context/TodoContext";

export const TodoUpdateForm = ({ id, titulo, contenido }) => {
  const { updateTodo } = useTodo();
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [inputTodoTitle, setInputTodoTitle] = useState(titulo);
  const [inputTodoContent, setInpuTodoContent] = useState(contenido);

  const handleOnUpdateTodo = (e) => {
    e.preventDefault();
    updateTodo(id, inputTodoTitle, inputTodoContent)
    handleClose()
  };

  return (
    <>
      <a
        className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        style={{ cursor: "pointer" }}
        onClick={() => handleShow()}
      >
        <i className="fa-solid fa-pen"></i>
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnUpdateTodo}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={titulo}
                onChange={(e) =>
                  setInputTodoTitle(e.target.value)
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={contenido}
                onChange={(e) => setInpuTodoContent(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                className="me-2"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
