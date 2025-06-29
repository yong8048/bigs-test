import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {
  LayoutContainer,
  SidebarWrapper,
  MainWrapper,
} from "./BoardLayout.styles";

const BoardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (!refreshToken) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <LayoutContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </LayoutContainer>
  );
};

export default BoardLayout;
