import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import Calendar from "../../components/Calendar";

export default function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.shape} onPress={() => {}} />
        <Title>
          Escolha uma {"\n"}
          data de ínicio e {"\n"}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar></Calendar>
      </Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
