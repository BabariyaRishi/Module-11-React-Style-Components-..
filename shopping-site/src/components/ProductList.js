import React from 'react';
import styled from 'styled-components';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?t=st=1718175105~exp=1718178705~hmac=483641996952d1d18b20e0a81f77732712b0b90b5d89ff2343ef53987978e142&w=360' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14981.jpg?t=st=1718175152~exp=1718178752~hmac=2414b600582ccfbd0abf76a0ed956596892e2aae7b1be66f8b46c97ff94383e3&w=360' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://img.freepik.com/premium-photo/fashion-portrait-male-person-studio-formal-clothing-blazer-isolated-dark-background-smile-confident-trendy-contemporary-businessman-clothes-body-stylish-man-model_590464-328303.jpg?w=360' },
  { id: 4, name: 'Product 4', price: '$40', image: 'https://img.freepik.com/premium-photo/cool-fashion-casual-men-outfit-wooden-table_93675-18917.jpg?w=360' },
];

const ProductContainer = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  color: #888;
`;

const ProductList = () => {
  return (
    <ProductContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductContainer>
  );
};

export default ProductList;
