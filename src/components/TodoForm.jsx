import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { Button, Modal } from "react-bootstrap";

export const TodoForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodoText] = useState("");

  const { createTodo } = useTodo();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    createTodo(todoTitle, todoText);
    setTodoText("");
    setTodoTitle("");
    handleClose();
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow}>
          New Todo <i className="fa-solid fa-plus"></i>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label className="form-label">Title task</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary me-2"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
