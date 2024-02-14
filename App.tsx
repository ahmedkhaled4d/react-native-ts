/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/navigation/HomeScreen';
import ProfileScreen from './pages/navigation/ProfileScreen';
import AuthScreen from './pages/navigation/AuthScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Profile Screen'}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{title: 'AuthScreen Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
