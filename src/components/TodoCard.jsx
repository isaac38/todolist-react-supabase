import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useTodo } from "../context/TodoContext";
import { TodoUpdateForm } from "./TodoUpdateForm";

export const TodoCard = ({ id, titulo, contenido, done }) => {
  const { deleteTodo, updateDoneTodo, viewTodo, oneTodo } = useTodo();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleViewTodo = (id) => {
    viewTodo(id);
    handleShow();
  };

  const [doneState, setDoneState] = useState(done);

  const handleDelteTodo = (id) => {
    deleteTodo(id);
  };

  const handleUpdateDoneTodo = (id) => {
    updateDoneTodo(id);
    setDoneState(true);
  };

  return (
    <Col md={4}>
      <Card border={doneState ? "success" : "primary"} className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{titulo}</Card.Title>
            <TodoUpdateForm id={id} />
          </div>
          <Card.Text>{contenido}</Card.Text>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              className="me-3"
              onClick={() => handleUpdateDoneTodo(id)}
            >
              Done
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => handleDelteTodo(id)}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
