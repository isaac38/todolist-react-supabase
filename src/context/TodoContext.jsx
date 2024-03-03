import { createContext, useContext, useState } from "react";
import { supabase } from "../api/client";

export const TodoContext = createContext();

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("Esta fallando el Contexto");
  return context;
};

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const getTodo = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error, data } = await supabase
      .from("todolist")
      .select()
      .eq("user_id", user.id);
      setTodo(data);

    if (error) {
      throw error;
    }
  };

  const createTodo = async (todoTitle, todoText) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { error, data } = await supabase
        .from("todolist")
        .insert({
          titulo: todoTitle,
          contenido: todoText,
          user_id: user.id,
        })
        .select();
      setTodo([...todo, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const { error } = await supabase.from("todolist").delete().eq("id", id);
      const result = todo.filter((todo) => todo.id != id);
      setTodo(result);
    } catch (error) {
      console.error(error);
    }
  };

  const updateDoneTodo = async (id) => {
    try {
      const { data, error } = await supabase
        .from("todolist")
        .update({ done: true })
        .eq("id", id)
        .select();
    } catch (error) {
      error.log(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        getTodo,
        createTodo,
        deleteTodo,
        updateDoneTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
