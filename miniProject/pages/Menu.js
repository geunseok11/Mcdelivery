import React, {useEffect, useState} from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';
import {View} from 'react-native';

const Menu = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <View>
          <Text>받으실주소</Text>
          <Text>배달예상시간</Text>
        </View>
        <View>
          <Text onPress={() => props.navigation.push('McDelivery')}>
            추천메뉴
          </Text>
          <Text onPress={() => props.navigation.push('McDelivery')}>
            버거&세트
          </Text>
          <Text onPress={() => props.navigation.push('McDelivery')}>
            스낵&사이드
          </Text>
          <Text onPress={() => props.navigation.push('McDelivery')}>음료</Text>
          <Text onPress={() => props.navigation.push('McDelivery')}>
            디저트
          </Text>
          <Text onPress={() => props.navigation.push('McDelivery')}>
            해피밀
          </Text>
        </View>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Menu;
