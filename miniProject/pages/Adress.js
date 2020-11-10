import React, {useEffect, useState} from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';
import styled from 'styled-components';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Adress = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>주문을 위해 아래의 배달 주소를 확인해주세요</Text>
        <TextInput>배달 받으실 주소</TextInput>
        <Button>주문하기</Button>
        <Button>주소변경</Button>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Adress;
