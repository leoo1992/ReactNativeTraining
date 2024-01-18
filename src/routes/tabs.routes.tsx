import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Agendamento } from "../screens/Home";
import { Menu } from "../screens/Menu";
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator, Group } = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Navigator>
      <Group
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "black",
          },
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            title: "Agendamento",
            tabBarLabel: "Agendamento",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="date-range" color={color} size={size} />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
}
