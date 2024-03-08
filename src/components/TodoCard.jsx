import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useTodo } from "../context/TodoContext";
import { TodoUpdateForm } from "./TodoUpdateForm";

export const TodoCard = ({ id, titulo, contenido, done }) => {
  const { deleteTodo, updateStatusTodo } = useTodo();

  const [doneState, setDoneState] = useState(done);

  const handleDelteTodo = (id) => {
    deleteTodo(id);
  };

  const handleUpdateDoneTodo = (id) => {
    updateStatusTodo(id);
    setDoneState(true);
  };

  return (
    <Col md={4}>
      <Card border={doneState ? "success" : "primary"} className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{titulo}</Card.Title>
            <TodoUpdateForm 
              id={id} 
              titulo={titulo} 
              contenido={contenido} 
            />
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
