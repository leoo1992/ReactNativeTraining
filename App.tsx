import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { ThemeProvider, CreateThemeOptions } from "@rneui/themed";

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
        <Home />
      </ThemeProvider>
    </>
  );
}
