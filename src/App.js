import React from "react";
import styled from "styled-components";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ProductsList from "./components/ProductsList";

const Container = styled.div`
  font-family: "Urbanist", sans-serif;
`;

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Navbar />
        <Categories />
        <Newsletter />
        <ProductsList />
      </Container>
    </React.Fragment>
  );
};

export default App;
