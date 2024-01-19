import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { ThemeProvider, CreateThemeOptions } from "@rneui/themed";
import { Routes } from "./src/routes";
import 'react-native-reanimated';


interface ExtendedTheme extends CreateThemeOptions {
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

const darkTheme: ExtendedTheme = {
  backgroundColor: "#333",
  textColor: "#fff", 
  titleColor: "#fff", 
};

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={darkTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
