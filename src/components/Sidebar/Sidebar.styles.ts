import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #fff;
  z-index: 100;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px lightgray;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 768px) {
    height: 40px;
    font-size: 0.9rem;
  }
`;

export const Aside = styled.aside<{ isOpen: boolean }>`
  width: 250px;
  background: #eee;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 280px;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: ${(props) =>
      props.isOpen ? "2px 0 10px rgba(0,0,0,0.1)" : "none"};
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  flex: 1;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 10px 0;
`;

export const CategoryItem = styled.li<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#d0eaff" : "transparent")};
  border-radius: 8px;
  margin-bottom: 4px;

  a {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => (props.isActive ? "#d0eaff" : "#f5f5f5")};
    }
  }

  svg {
    margin-right: 12px;
    font-size: 20px;
    color: gray;
  }

  @media (max-width: 768px) {
    a {
      padding: 16px 20px;
    }

    svg {
      font-size: 22px;
      margin-right: 16px;
    }
  }
`;

export const CategoryLink = styled.span`
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: block;
  padding: 8px 0;
  font-size: 0.95rem;

  &:hover {
    color: #1976d2;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const UserSection = styled.div`
  width: 100%;
  border-top: 1px solid #ddd;
  padding-top: 16px;
  margin-top: auto;
`;

export const UserData = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  text-align: right;
  line-height: 1.4;

  > div:first-child {
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
    font-size: 13px;
  }

  > div:last-child {
    font-size: 11px;
    color: #333;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;

    > div:first-child {
      font-size: 14px;
    }

    > div:last-child {
      font-size: 12px;
    }
  }
`;

export const UserEmail = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  word-break: break-all;
  line-height: 1.3;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    background-color: #b71c1c;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  background: #fff;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

// 모바일 햄버거 메뉴 버튼
export const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 20px;
  }
`;

// 모바일 오버레이
export const MobileOverlay = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;
