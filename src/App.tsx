import React, { useEffect, useState, useRef } from "react";
import "./styles/globals.css";
import { Route, Routes, Navigate, useNavigate } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Board from "./pages/Board";
import BoardPost from "./pages/BoardPost/BoardPost";
import BoardEdit from "./pages/BoardEdit/BoardEdit";
import BoardDetail from "./pages/BoardDetail/BoardDetail";
import { AuthStoreContext } from "./stores/AuthStoreContext";
import authStore from "./stores/AuthStore";
import { refresh } from "./api/auth";
import Loading from "./components/Loading/Loading";
import BoardLayout from "./components/BoardLayout/BoardLayout";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const refreshCalled = useRef(false);

  useEffect(() => {
    if (refreshCalled.current) return;

    const refreshToken = sessionStorage.getItem("refreshToken");

    if (refreshToken) {
      refreshCalled.current = true;
      refresh({ refreshToken })
        .then((res) => {
          authStore.setAccessToken(res.accessToken);
          // JWT 토큰에서 자동으로 사용자 정보가 추출됩니다
          sessionStorage.setItem("refreshToken", res.refreshToken);
          setLoading(false);
        })
        .catch((error) => {
          // 로그아웃 처리
          authStore.logout();
          navigate("/login");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return <Loading message="인증 정보를 확인하는 중..." />;
  }

  return (
    <AuthStoreContext.Provider value={authStore}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/board" replace />} />
        <Route path="/board" element={<BoardLayout />}>
          <Route index element={<Board />} />
          <Route path="post" element={<BoardPost />} />
          <Route path=":id" element={<BoardDetail />} />
          <Route path=":id/edit" element={<BoardEdit />} />
        </Route>
      </Routes>
    </AuthStoreContext.Provider>
  );
}

export default App;
