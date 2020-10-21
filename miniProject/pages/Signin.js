import React from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';
import styled from 'styled-components';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Signin = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents></Contents>
    </Container>
  );
};

export default Signin;
