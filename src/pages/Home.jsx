import React from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

export const Home = () => {
  return (
    <>
      <h1>TodoList</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};
