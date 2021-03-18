/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import type { Node } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import { Cover, TableOfContents } from './src';

const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Cover"
          component={Cover}
        />
        <Stack.Screen
          name="TableOfContents"
          component={TableOfContents}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: () => Node = () => {

  return (
    <MyStack />
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

const Main = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}

export default Main;
