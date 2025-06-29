import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
      }}
    >
      <h1 style={{ fontSize: 64, marginBottom: 16 }}>404</h1>
      <p style={{ fontSize: 20, marginBottom: 32 }}>
        페이지를 찾을 수 없습니다.
      </p>
      <button
        style={{
          padding: "12px 32px",
          fontSize: 18,
          borderRadius: 8,
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => navigate("/login")}
      >
        홈으로 이동
      </button>
    </div>
  );
};

export default NotFound;
