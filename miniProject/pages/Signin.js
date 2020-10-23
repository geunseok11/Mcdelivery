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
      <Contents>
        <Text>회원정보</Text>
        <TextInput>이름</TextInput>
        <Text>성별</Text>
        <TextInput>전화번호</TextInput>
        <TextInput>이메일</TextInput>
        <Text>비밀번호</Text>
        <TextInput>비밀번호</TextInput>
        <TextInput>비밀번호확인</TextInput>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Signin;
