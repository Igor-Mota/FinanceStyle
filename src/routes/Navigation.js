import 'react-native-gesture-handler'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/selectTheme'

import { StatusBar } from 'expo-status-bar'
import InitScreen from '../pages/InitScreen'
import Home from '../pages/Home'
import Balance from '../pages/Balance'
import AddNew from '../pages/AddNew'
import UserSettings from '../pages/UserSettings'
import { useTheme } from '../context/theme'
import { color } from 'react-native-reanimated'

export default function NAvigation() {
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()
    const colors = theme(useTheme().changeTheme)
    function Tabs() {
        return (
            <ThemeProvider theme={colors}>
                <StatusBar backgroundColor={colors.backGround} style="light" />
                <Tab.Navigator
                    tabBarOptions={{
                        tabStyle: { backgroundColor: colors.backGround },
                        keyboardHidesTabBar: true,
                        showLabel: false,
                        activeTintColor: colors.iconActive,
                        inactiveTintColor: colors.iconInactive,
                        activeBackgroundColor: '#000000',
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarIcon: ({ color }) => {
                                return (
                                    <Entypo
                                        name="home"
                                        size={24}
                                        color={color}
                                    />
                                )
                            },
                        }}
                    />

                    <Tab.Screen
                        name="Balance"
                        component={Balance}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialIcons
                                    name="money-off"
                                    size={24}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="AddNew"
                        component={AddNew}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Feather
                                    name="calendar"
                                    size={24}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="UserSettings"
                        component={UserSettings}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <AntDesign
                                    name="setting"
                                    size={24}
                                    color={color}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </ThemeProvider>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
