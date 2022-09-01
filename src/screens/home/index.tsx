import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars } from "./styles";
import Logo from "../../assets/logo.svg";

export function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="transparent" />
      <Header>
        <Logo height={RFValue(12)} width={RFValue(108)} />
        <TotalCars>Total de carros</TotalCars>
      </Header>
    </Container>
  );
}
