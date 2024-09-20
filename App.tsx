/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//testing

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import callGenerate from './src/screens/callGenerate';
import callScreen from './src/screens/callScreen';
import homeScreen from './src/screens/homeScreen';
import login from './src/screens/login';
import CustomerHomeScreen from './src/screens/notification/customerHome';
import VendorHomeScreen from './src/screens/notification/vendorHome';
import vendorLogin from './src/screens/vendorLogin';
import signup from './src/screens/signup';
import chat from './src/screens/notification/chat';

function App(): React.JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>

      <Stack.Navigator
        initialRouteName={'signup'}>
        <Stack.Screen
          name="signup"
          component={signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="vendorLogin"
          component={vendorLogin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="homeScreen"
          component={homeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="callGenerate"
          component={callGenerate}
          options={{ presentation: 'modal', headerShown: false }} // Modal presentation style

        />
        <Stack.Screen
          name="callScreen"
          component={callScreen}
          options={{ presentation: 'modal', headerShown: false }} // Modal presentation style

        />
        <Stack.Screen
          name="VendorHomeScreen"
          component={VendorHomeScreen}
          options={{ presentation: 'modal', headerShown: false }} // Modal presentation style

        />
        <Stack.Screen
          name="CustomerHomeScreen"
          component={CustomerHomeScreen}
          options={{ presentation: 'modal', headerShown: true }} // Modal presentation style

        />
        <Stack.Screen
          name="chat"
          component={chat}
          options={{ presentation: 'modal', headerShown: true }} // Modal presentation style

        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
