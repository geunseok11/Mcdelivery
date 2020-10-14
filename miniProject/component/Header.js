import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  align-items: center;
  background-color: #f5efef;
`;

const HeaderCenterText = styled.Text`
  color: #464e46;
  letter-spacing: 5px;
  font-size: 23px;
  font-family: Consola;
`;

const Header = (props) => {
  return (
    <HeaderView>
      <HeaderCenterText onPress={() => props.navigation.push('Home')}>
        맥딜리버리
      </HeaderCenterText>
      <HeaderCenterText onPress={() => props.navigation.push('Menu')}>
        주문하기
      </HeaderCenterText>
    </HeaderView>
  );
};
