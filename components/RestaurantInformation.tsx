import { RouteProp } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation/stackNavigation';

import React from 'react';

type RestaurantInformationScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'RestaurantInformation'>;
    route: RouteProp<RootStackParamList, 'RestaurantInformation'>;
};

const RestaurantInformationScreen: React.FC<RestaurantInformationScreenProps> = ({
  route,
}) => {
  const { restaurant } = route.params;

  


  return (
    <View>
        <Text>{restaurant._id}</Text>
    </View>
  );
};

export default RestaurantInformationScreen;