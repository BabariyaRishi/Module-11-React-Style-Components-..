import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background: url('https://img.freepik.com/free-photo/shopping-bag-filled-with-colorful-gifts-modern-retail-store-generated-by-artificial-intelligence_188544-130854.jpg') center/cover no-repeat;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const BannerText = styled.h2`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 10px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerText>Welcome to Our Store</BannerText>
    </BannerContainer>
  );
};

export default Banner;
