import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(126)}px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background_secondary};
  margin: 8px auto;
  padding: ${RFValue(24)}px;
flex-direction: row;
justify-content: space-between;
`;

export const TextContainer = styled.View`
min-width: ${RFValue(110)}px;
`;

export const SubTitle = styled.Text`
    text-transform: uppercase;
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    margin-bottom: -${RFValue(4)}px;
    `;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: ${RFValue(16)}px;
    `;

export const Price = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.main};
`;

export const PriceContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarImage = styled.Image`
    width: 167px;
    height: 92px;
`
