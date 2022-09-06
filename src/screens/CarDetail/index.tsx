import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, ImagesSliderContainer } from "./styles";

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
    </Container>
  );
}
