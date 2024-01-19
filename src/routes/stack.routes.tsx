import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Agendamento } from "../screens/Agendamento";
import { Menu } from "../screens/Menu";

const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>

      <Group
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
        }}
      >
        <Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
          }}
        />
        <Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            title: "Agendamento",
          }}
        />
      </Group>
      
    </Navigator>
  );
}
