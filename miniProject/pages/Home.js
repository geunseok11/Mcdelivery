import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Nav from '../component/Nav';
import Header from '../component/Header';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Home = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <View></View>
        <View></View>
        <View></View>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Home;
