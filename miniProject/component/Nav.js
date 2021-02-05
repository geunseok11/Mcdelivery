import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {StyleSheet, Text, View, Input, TouchableOpacity} from 'react-native';
import Home from '../pages/Home';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const NavView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;
const NavIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: solid green;
`;

const NavText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  width: 50px;
  height: 50px;
  align-items: center;
  color: #464e46;
  border: solid green;
`;

const Nav = (props) => {
  return (
    <NavView>
      <NavText
        onPress={() => {
          props.navigation.push('Home');
        }}>
        home
      </NavText>

      <NavText
        onPress={() => {
          props.navigation.push('Menu');
        }}>
        메뉴
      </NavText>

      <NavText
        onPress={() => {
          props.navigation.push('Bookmark');
        }}>
        즐겨찾기
      </NavText>

      <NavText
        onPress={() => {
          props.navigation.push('Inquiry');
        }}>
        주문조회
      </NavText>

      <NavText
        onPress={() => {
          props.navigation.push('List');
        }}>
        더보기
      </NavText>

      {/* <NavIcon
        onPress={() => {
          props.navigation.push('Menu');
        }}></NavIcon>

      <NavIcon
        onPress={() => {
          props.navigation.push('Bookmark');
        }}></NavIcon>

      <NavIcon
        onPress={() => {
          props.navigation.push('Inquiry');
        }}></NavIcon>

      <NavIcon
        onPress={() => {
          props.navigation.push('List');
        }}></NavIcon> */}
    </NavView>
  );
};

export default Nav;
