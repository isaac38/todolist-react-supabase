import React, { useEffect } from "react";
import { useTodo } from "../context/TodoContext";
import { TodoCard } from "./TodoCard";
import { Row } from "react-bootstrap";

export const TodoList = () => {
  const { todo, getTodo } = useTodo();
  
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="mt-4">
      <Row>
        {todo.map((todos) => {
          return (
            <TodoCard
              key={todos.id}
              id={todos.id}
              titulo={todos.titulo}
              contenido={todos.contenido}
              done={ todos.done }
            />
          );
        })}
      </Row>
    </div>
  );
};
