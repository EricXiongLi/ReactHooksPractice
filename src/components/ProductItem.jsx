import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 3;
  position: absolute;
`;

const Container = styled.div`
  display: flex;
  height: 350px;
  flex: 1;
  background-color: #f5fbfd;
  margin: 5px;
  min-width: 280px;
  position: relative;
  align-items: center;
  justify-content: center;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Circle = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const IconContainer = styled.div`
  opacity: 1;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #e9f5f5;
  }
`;

const ProductItem = (props) => {
  return (
    <Container>
      <Circle />
      <Image src={props.item.img} />
      <InfoContainer>
        <IconContainer>
          <ShoppingCartOutlinedIcon />
        </IconContainer>
        <IconContainer>
          <SearchOutlinedIcon />
        </IconContainer>
        <IconContainer>
          <FavoriteBorderOutlinedIcon />
        </IconContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductItem;
