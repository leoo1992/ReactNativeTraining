import { createDrawerNavigator } from "@react-navigation/drawer";
import { Agendamento } from "../screens/Agendamento";
import { Menu } from "../screens/Menu";
import { ListaEvento } from "../screens/ListaEvento";
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
            marginTop: 20,
          },
          drawerContentStyle: {
            borderRightWidth: 10,
            borderColor: "#9999",
          },
          headerShadowVisible: false,
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
            headerRight: () => (
              <MaterialIcons
                name="home"
                size={25}
                color="white"
                style={{ marginRight: 40, marginTop: 5 }}
              />
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
            headerRight: () => (
              <MaterialIcons
                name="date-range"
                size={25}
                color="white"
                style={{ marginRight: 40, marginTop: 5 }}
              />
              ),
            }}
        />
            <Screen
              name="ListaEvento"
              component={ListaEvento}
              options={{
                title: "Eventos agendados",
                drawerIcon: ({ color, size }) => (
                  <MaterialIcons name="timeline" color={color} size={size} />
                ),
                headerRight: () => (
                  <MaterialIcons
                    name="timeline"
                    size={25}
                    color="white"
                    style={{ marginRight: 40, marginTop: 5 }}
                  />
                ),
              }}
            />
      </Group>
    </Navigator>
  );
}
