import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import About from '../screens/About';
import Blog from '../screens/Blog';
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
    return (
        <TabBottom.Navigator
            initialRouteName='Home'
            screenOptions={{ 
                tabBarActiveTintColor: "#FCDB58",
                tabBarInactiveTintColor:"#34A5DE",
                tabBarStyle: {
                    backgroundColor: ""
                }
            }}>
            <TabBottom.Screen
                name="Sobre"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size,
                        color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='home' />);
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={color}
                                name='home-outline' />
                        )
                    },
                }} />
            <TabBottom.Screen
                name="Segurança"
                component={Feed}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size,
                        color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='newspaper' />);
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={color}
                                name='newspaper-outline' />
                        )
                    },
                }} />
            <TabBottom.Screen
                name="Serviços"
                component={About}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size,
                        color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='information-circle' />);
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={color}
                                name='information-circle-outiline' />
                        )
                    },
                }} />
        </TabBottom.Navigator>
    );
}
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:'#FCDB58'
            }
        }}>
            <Drawer.Screen
                name='Inicio'
                component={TabBottomRoutes}
                options={{
                    drawerLabel: 'Inicio',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons size={size} color={color}
                            name='home' />
                    )
                }} 
            />
            <Drawer.Screen
                name='Suporte'
                component={StackRoutes}
                options={{
                    drawerLabel: 'Suporte',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons size={size} color={color}
                            name='archive' />
                    )
                }} 
            />
        </Drawer.Navigator>);
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Blog' component={Blog} />
            <Stack.Screen name='Info1' component={Info1} />
            <Stack.Screen name='Info2' component={Info2} />
        </Stack.Navigator>
    );
}