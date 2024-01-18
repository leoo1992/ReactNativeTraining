import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { TabsRoutes } from './tabs.routes';
import { DrawerRoutes } from './drawer.routes';

export function Routes () {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}