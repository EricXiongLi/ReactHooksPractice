import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  background-color: rgb(250, 227, 241);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 80px;
  font-weight: 150;
  font-family: "Urbanist", sans-serif;
`;

const Desc = styled.span`
  font-size: 20px;
  font-weight: 20;
  margin-bottom: 20px;
`;

const EmailContainer = styled.div`
  display: flex;
  width: 40%;
  height: 30px;
  justify-content: space-between;
`;

const Input = styled.input`
  placeholder: email;
  flex: 9;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  flex: 1;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Lorem ipsum dolor sit amet.</Desc>
      <EmailContainer>
        <Input placeholder="email" />
        <Button>
          <SendIcon />
        </Button>
      </EmailContainer>
    </Container>
  );
};

export default Newsletter;
