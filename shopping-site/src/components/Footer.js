import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #222;
  padding: 1rem;
  color: white;
  text-align: center;
  margin-top: auto;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Shopping Site. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
