import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import * as S from "./Sidebar.styles";
import {
  IoNewspaperOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import authStore from "../../stores/AuthStore";

const Sidebar = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    authStore.logout();
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.SidebarContainer>
      <S.MobileMenuButton onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </S.MobileMenuButton>

      <S.MobileOverlay
        isOpen={isMobileMenuOpen}
        onClick={handleMobileMenuClose}
      />

      <S.Aside isOpen={isMobileMenuOpen}>
        <S.Top>카테고리</S.Top>
        <S.Nav>
          <S.CategoryList>
            <S.CategoryItem isActive={location.pathname.startsWith("/board")}>
              <Link to="/board" onClick={handleNavClick}>
                <IoNewspaperOutline />
                <S.CategoryLink as="span">게시판</S.CategoryLink>
              </Link>
            </S.CategoryItem>
          </S.CategoryList>
        </S.Nav>

        <S.UserSection>
          <S.UserData>
            <div>{authStore.userName}</div>
            <div>{authStore.userEmail}</div>
          </S.UserData>
          <S.LogoutButton onClick={handleLogout}>
            <IoLogOutOutline style={{ marginRight: "4px" }} />
            로그아웃
          </S.LogoutButton>
        </S.UserSection>
      </S.Aside>
    </S.SidebarContainer>
  );
});

export default Sidebar;
