import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

const Container = styled.div`
  display: flex;
  background-color: white;
  height: 5vh;
`;

const Left = styled.div`
  flex: 1;
  display: flex;

  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Language = styled.p`
  font-size: 16px;
  font-weight: 20;
  margin-right: 20px;
`;

const SearchInput = styled.input``;

const Logo = styled.p`
  font-weight: 200;
  font-size: 40px;
  font-family: urbanist;
`;

const Title = styled.p`
  margin-right: 20px;
`;

const CartIcon = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchInput />
        <SearchOutlinedIcon />
      </Left>
      <Center>
        <Logo>Celine</Logo>
      </Center>
      <Right>
        <Title>Register</Title>
        <Title>SIGN IN</Title>
        <CartIcon>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </CartIcon>
      </Right>
    </Container>
  );
};

export default Navbar;
