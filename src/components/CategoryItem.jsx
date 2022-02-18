import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 300;
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border: solid 1px lightblue;
  cursor: pointer;
  color: gray;
`;

const Image = styled.img`
  width: 98%;
  height: 95%;
`;

const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img} />
      <Info>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
