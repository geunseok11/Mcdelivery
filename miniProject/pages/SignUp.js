import React from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUp = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents></Contents>
    </Container>
  );
};

export default SignUp;
