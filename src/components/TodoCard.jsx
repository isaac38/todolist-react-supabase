import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useTodo } from "../context/TodoContext";

export const TodoCard = ({ id, titulo, contenido }) => {
  const { deleteTodo, updateTodo } = useTodo();

  const handleDelteTodo = (id) => {
    deleteTodo(id);
  };

  const handleUpdateTodo = () => {
    updateTodo();
  };

  return (
    <Col md={4}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{contenido}</Card.Text>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              className="me-3"
              onClick={handleUpdateTodo}
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
