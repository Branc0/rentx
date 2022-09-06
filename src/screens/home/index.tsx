import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

import { Body, CarList, Container, Header, TotalCars } from "./styles";
import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";

export function Home() {
  const cars = {
    name: "RS 5 Coupé",
    brand: "Audi",
    type: "fuel",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  return (
    <Container>
      <StatusBar backgroundColor="transparent" />
      <Header>
        <Logo height={RFValue(12)} width={RFValue(108)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </Header>
      <Body>
        <CarList
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => String(item)}
          renderItem={() => <CarCard data={cars} />}
        />
      </Body>
    </Container>
  );
}
