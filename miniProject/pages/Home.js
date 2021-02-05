import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
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

const ContentsText = styled.Text`
  color: #eb0000;
  width: 150px;
  height: 200px;
  letter-spacing: 5px;
  font-size: 15px;
  font-family: Consola;
  margin-left: 0px;
  border: 2px solid red;
`;

const Home = (props) => {
  // const [count, setCount] = React.useState(0);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => setCount((c) => c + 1)} title="주문하기" />
  //     ),
  //   });
  // }, [navigation]);
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ContentsText>주문조회</ContentsText>
          <ContentsText>맥딜리버리 주문하기</ContentsText>
          {/* <Text>Count: {count}</Text> */}
        </View>
      </Contents>
      <Nav props={props} />
    </Container>
    // <Container>
    //   {/* <Header props={props} /> */}
    //   <Contents>
    //     <View>
    //       <Text>menu</Text>
    //     </View>
    //     <View></View>
    //     <View></View>
    //   </Contents>
    //   {/* <Nav props={props} /> */}
    // </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    borderColor: 'green',
    // border
    borderWidth: 100,
    borderStyle: 'solid',
  },
});
