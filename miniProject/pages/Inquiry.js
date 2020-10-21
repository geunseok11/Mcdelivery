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

const Inquiry = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents></Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Inquiry;
