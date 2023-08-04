import { createDrawerNavigator } from '@react-navigation/drawer';
import Recommender from '../Recommender';
import StackNavigator, { RootStackParamList } from './stackNavigation';
import HomeScreen from '../HomeScreen';

import React from 'react';
import { Header, createStackNavigator } from '@react-navigation/stack';
import RestaurantInformationScreen from '../RestaurantInformation';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Other" component={Recommender} />
        </Drawer.Navigator>
  );
};

export default DrawerNavigator;
