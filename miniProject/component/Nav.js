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
  border-radius: 50px;
  background-color: white;
`;
const NavIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-style: solid;
  border-color: green;
`;

const NavText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #464e46;
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

      <NavIcon
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
        }}></NavIcon>
    </NavView>
  );
};

export default Nav;
