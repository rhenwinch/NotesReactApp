/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppDestinations} from '../screens/common/AppDestinations';
import {AddScreen, DashboardScreen} from '../screens';
import {StatusBar, useColorScheme} from 'react-native';
import {useTheme} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkThemed = useColorScheme() === 'dark';
  const {colors} = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkThemed ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor={colors.background}
      />
      <Stack.Navigator initialRouteName={AppDestinations.DashboardScreen}>
        <Stack.Screen
          name={AppDestinations.DashboardScreen}
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={AppDestinations.AddScreen} component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
