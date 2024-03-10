import React, { useEffect, useState } from "react";
import { supabase } from "./api/client";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContext";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";

export const App = () => {
  const navigate = useNavigate();

  const [sessionActive, setSessionSctive] = useState(null);
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, sessin) => {
      setSessionSctive(sessin);
      setUserEmail(sessin.user.email)
      if (!sessin) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      {!sessionActive ? "" : <NavBar userEmail={userEmail} />}
      <div className="container">
        <TodoContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TodoContextProvider>
      </div>
    </>
  );
};
