import { createDrawerNavigator } from '@react-navigation/drawer';
import Recommender from '../Recommender';
import StackNavigator from './stackNavigation';
import HomeScreen from '../HomeScreen';

import React from 'react';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Other" component={Recommender} />
        </Drawer.Navigator>
  );
};

export default DrawerNavigator;
