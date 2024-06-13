import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #222;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;
`;

const NavLink = styled.a`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Shopping Site</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#products">Products</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
