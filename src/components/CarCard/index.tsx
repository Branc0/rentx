import React from "react";

import {
  Container,
  TextContainer,
  SubTitle,
  Name,
  Price,
  PriceContainer,
  CarImage,
} from "./styles";
import FuelSvg from "../../assets/gasoline.svg";
import ElectricSvg from "../../assets/energy.svg";

interface CarData {
  name: string;
  brand: string;
  type: string;
  rent: {
    price: number;
    period: string;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function CarCard({ data }: Props) {
  const { name, brand, type, rent, thumbnail } = data;
  return (
    <Container>
      <TextContainer>
        <SubTitle>{brand}</SubTitle>
        <Name>{name}</Name>
        <SubTitle>Ao dia</SubTitle>
        <PriceContainer>
          <Price>R$ {rent.price},00</Price>
          {type === "fuel" ? <FuelSvg /> : <ElectricSvg />}
        </PriceContainer>
      </TextContainer>
      <CarImage
        source={{
          uri: thumbnail,
        }}
      />
    </Container>
  );
}
