import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
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

const List = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>맥딜리버리</Text>
        <Button>주문내역</Button>
        <Text>계정 설정</Text>
        <Button>내 정보</Button>
        <Button>주소록</Button>
        <Text>이야기</Text>
        <Button>맥도날드이야기</Button>
        <Button>영양정보/원산지정보</Button>
        <Button>로그아웃</Button>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default List;
