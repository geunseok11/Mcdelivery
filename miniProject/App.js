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

import {createStackNavigator} from '@react-navigation/stack';
// import {Provider} from 'react-redux';
import Navigator from './navigator/Navigator';
import Home from './pages/Home';
// import configureStore from './store/configureStore';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fbf5f5',
  },
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>

    // <Provider store={configureStore}>
    //   <StatusBar style="auto" />

    //   <NavigationContainer theme={Theme}>
    //     <Navigator />
    //   </NavigationContainer>
    // </Provider>
  );
};

export default App;
