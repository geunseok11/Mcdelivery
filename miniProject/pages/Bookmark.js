import React, {useEffect, useState} from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';

const Bookmark = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents></Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Bookmark;
