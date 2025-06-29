import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {
  LayoutContainer,
  SidebarWrapper,
  MainWrapper,
} from "./BoardLayout.styles";

const BoardLayout = () => {
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
