import React from "react";
import "./styles/globals.css";
import { Route, Routes, Navigate } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Board from "./pages/Board";
import BoardPost from "./pages/BoardPost/BoardPost";
import BoardEdit from "./pages/BoardEdit/BoardEdit";
import BoardDetail from "./pages/BoardDetail/BoardDetail";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthStoreContext } from "./stores/AuthStoreContext";
import authStore from "./stores/AuthStore";

function App() {
  return (
    <AuthStoreContext.Provider value={authStore}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/board" replace />} />
        <Route
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        >
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<BoardDetail />} />
          <Route path="/board/post" element={<BoardPost />} />
          <Route path="/board/:id/edit" element={<BoardEdit />} />
        </Route>
      </Routes>
    </AuthStoreContext.Provider>
  );
}

export default App;
