import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Adress from '../pages/Adress';
import Bookmark from '../pages/Bookmark';
import Inquiry from '../pages/Inquiry';
import List from '../pages/list';
import Menu from '../pages/Menu';
import McDelivery from '../pages/Mcdelivery';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Adress" component={Adress} />
    //   <Stack.Screen name="Bookmark" component={Bookmark} />
    //   <Stack.Screen name="Inquiry" component={Inquiry} />
    //   <Stack.Screen name="List" component={List} />
    //   <Stack.Screen name="Menu" component={Menu} />
    //   <Stack.Screen name="McDelivery" component={McDelivery} />
    //   <Stack.Screen name="Signin" component={Signin} />
    //   <Stack.Screen name="SignUp" component={SignUp} />
    // </Stack.Navigator>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
