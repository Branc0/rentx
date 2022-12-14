import React from "react";
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/styles/theme";
import { Home } from "./src/screens/Home";
import { CarDetail } from "./src/screens/CarDetail";
import Scheduling from "./src/screens/Scheduling";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";
import { SchedulingCompleted } from "./src/screens/SchedulingComplete";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <CarDetail /> */}
      {/* <Scheduling /> */}
      {/* <SchedulingDetails /> */}
      <SchedulingCompleted />
    </ThemeProvider>
  );
}
