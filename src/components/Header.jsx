import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(197, 230, 212);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 20;
`;

const Header = () => {
  return (
    <Container>
      <Title>lorem Ips incorrectly</Title>
    </Container>
  );
};

export default Header;
