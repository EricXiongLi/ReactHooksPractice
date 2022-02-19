import React from "react";
import styled from "styled-components";
import CallbackComponent from "./components/CallbackComponent";
import Effect from "./components/Effect";
import MemoComponent from "./components/MemoComponent";
import ReducerComponent from "./components/ReducerComponent";
import RefComponent from "./components/RefComponent";

const Container = styled.div`
  font-family: "Urbanist", sans-serif;
`;
export const numberContext = React.createContext({
  name: "xiongli",
  age: 17,
});

const App = () => {
  return (
    <React.Fragment>
      <Effect />
      <RefComponent />
      <ReducerComponent />
      <MemoComponent />
      <CallbackComponent />
    </React.Fragment>
  );
};


export default App;
