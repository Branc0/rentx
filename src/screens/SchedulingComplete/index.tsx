import { View, useWindowDimensions } from "react-native";
import React from "react";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Footer, Message, Title } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

export function SchedulingCompleted() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu atuomóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title={"OK"}></ConfirmButton>
      </Footer>
    </Container>
  );
}
