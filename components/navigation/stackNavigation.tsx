import { createStackNavigator } from '@react-navigation/stack';
import RestaurantInformationScreen from '../RestaurantInformation';
import DrawerNavigator from './drawerNavigation';
import { Restaurant } from '../card';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text } from 'react-native';

import React from 'react';
import HomeScreen from '../HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    HomeScreen: undefined;
    RestaurantInformation: { restaurant: Restaurant };
};

const StackNavigator = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={DrawerNavigator} options={{headerShown: false}}  />
            <Stack.Screen name="RestaurantInformation" component={RestaurantInformationScreen} />
        </Stack.Navigator>
  );
};

export default StackNavigator;
