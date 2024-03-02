import React, { useEffect } from "react";
import { supabase } from "./api/client";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContext";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, sessin) => {
      if (!sessin) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="mt-5">
          <TodoContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TodoContextProvider>
        </div>
      </div>
    </>
  );
};
