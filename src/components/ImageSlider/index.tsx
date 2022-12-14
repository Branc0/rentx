import React from "react";
import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          resizeMode="contain"
          source={{ uri: imagesUrl[0] }}
        ></CarImage>
      </CarImageWrapper>
    </Container>
  );
}
