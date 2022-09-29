import React from "react";
import { Accessory } from "../../components/Accessory";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";

import {
  Container,
  Header,
  ImagesSliderContainer,
  Content,
  Description,
  Details,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";

export function CarDetail() {
  return (
    <Container>
      <Header>
        <BackButton></BackButton>
      </Header>
      <ImagesSliderContainer>
        <ImageSlider
          imagesUrl={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        ></ImageSlider>
      </ImagesSliderContainer>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="380km/h" icon={SpeedSvg} />
        </Accessories>
        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Confirmar"></Button>
      </Footer>
    </Container>
  );
}
