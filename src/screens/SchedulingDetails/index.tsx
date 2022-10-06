import React from "react";
import { Accessory } from "../../components/Accessory";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";

export function SchedulingDetails() {
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
        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather name="chevron-right" size={RFValue(10)} />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Confirmar"></Button>
      </Footer>
    </Container>
  );
}
