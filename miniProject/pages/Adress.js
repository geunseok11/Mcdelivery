import React, {useEffect, useState} from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';

const Adress = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents></Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Adress;
