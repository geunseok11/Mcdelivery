import React, {useEffect, useState} from 'react';
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

const Bookmark = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>저장된 주문</Text>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Bookmark;
