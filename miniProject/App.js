import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Navigator from './navigator/Navigator';
import configureStore from './store/configureStore';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fbf5f5',
  },
};

const App: () => React$Node = () => {
  return (
    <Provider store={configureStore}>
      <StatusBar style="auto" />

      <NavigationContainer theme={Theme}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
