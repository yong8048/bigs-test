import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #fff;
  z-index: 100;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const MainWrapper = styled.main`
  flex-grow: 1;
  margin-left: 250px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
