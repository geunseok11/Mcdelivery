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

const App: () => React$Node = () => {
  return (
    <Provider>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
