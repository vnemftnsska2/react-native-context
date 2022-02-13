import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import Input from "./components/Input";
import User from "./components/User";
import { UserProvider } from "./contexts/User";
import StackNavigation from "./navigations/Stack";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    // <UserProvider>
    //   <Container>
    //     <User />
    //     <Input />
    //   </Container>
    // </UserProvider>

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
