import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  height: ${RFValue(113)}px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 32px;
`;

export const Body = styled.View`
  flex: 1;
  padding: 8px 16px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
  showsVerticalScrollIndicator: false,
})``;
