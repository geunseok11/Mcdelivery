import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import LogoTitle from '../component/LogoTitle';

const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  align-items: center;
  background-color: white;
`;

const HeaderCenterText = styled.Text`
  color: #eb0000;
  letter-spacing: 5px;
  font-size: 15px;
  font-family: Consola;
  margin-left: 20px;
`;

const Header = (props) => {
  return (
    <HeaderView>
      <LogoTitle />
      <HeaderCenterText>EN</HeaderCenterText>
      <HeaderCenterText onPress={() => props.navigation.push('Menu')}>
        주문하기
      </HeaderCenterText>
    </HeaderView>
  );
};

export default Header;
