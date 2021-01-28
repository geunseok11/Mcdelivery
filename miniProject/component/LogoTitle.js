import * as React from 'react';
import {Button, Text, Image} from 'react-native';

function LogoTitle() {
  return (
    <Image style={{width: 50, height: 50}} source={require('./img.jpg')} />
  );
}

export default LogoTitle;
