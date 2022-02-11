import React from "react";
import styled from "styled-components/native";
import UserContext from "../contexts/User";

const SytledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const User = (props) => {
  return (
    <UserContext.Consumer>
      {(v) => <SytledText>Name: {v.name}</SytledText>}
    </UserContext.Consumer>
  );
};

export default User;
