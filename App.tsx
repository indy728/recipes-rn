/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import type { Node } from 'react';
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

const App: () => Node = () => {
  const [page, setPage] = useState({
    thisPage: 'COVER',
    lastPage: 'COVER',
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handlePageChange: (T: string) => void = (newPage: string) => {
    setPage({
      thisPage: newPage,
      lastPage: page.thisPage,
    })
  }

  const CurrentPage = pages[page.thisPage]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
          <Text>Hello2</Text>
        </View>
      </ScrollView> */}
      <CurrentPage changePage={handlePageChange} goBack={() => handlePageChange(page.lastPage)} />
    </SafeAreaView>
  );
};

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
