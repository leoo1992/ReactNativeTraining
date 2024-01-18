import { createDrawerNavigator } from "@react-navigation/drawer";
import { Agendamento } from "../screens/Home";
import { Menu } from "../screens/Menu";
import { MaterialIcons } from "@expo/vector-icons";
const { Screen, Navigator, Group } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Group
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#333",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          },
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "gray",
          drawerContentContainerStyle: {
              marginTop: 20
          },
          drawerContentStyle: {
            borderRightWidth: 10,
            borderColor: "#9999"
          }
        }}
      >
        <Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            title: "Agendamento",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="date-range" color={color} size={size} />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
}
