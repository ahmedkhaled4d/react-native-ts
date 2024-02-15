/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/navigation/HomeScreen';
import ProfileScreen from './pages/navigation/ProfileScreen';
import AuthScreen from './pages/navigation/AuthScreen';
import {useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  console.log(colors);
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
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
