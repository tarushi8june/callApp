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
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import login from './src/screens/login';
import homeScreen from './src/screens/homeScreen';
import vendorLogin from './src/screens/vendorLogin';
import callGenerate from './src/screens/callGenerate';
import callScreen from './src/screens/callScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
        initialRouteName={'login'}>
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
