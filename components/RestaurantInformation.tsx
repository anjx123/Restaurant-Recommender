import { RouteProp } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation/stackNavigation';

import React from 'react';
import { Restaurant, getCurrentOperationalHour } from './card';

type RestaurantInformationScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'RestaurantInformation'>;
    route: RouteProp<RootStackParamList, 'RestaurantInformation'>;
};

const RestaurantInformationScreen: React.FC<RestaurantInformationScreenProps> = ({
  route,
}) => {
  const { restaurant } = route.params;

  const currentOperationalHour = getCurrentOperationalHour(restaurant);
  
  return (
    <View>
        <Text>Mogus would like to eat at: {restaurant.name} !!</Text>
        <Text>{restaurant.phone_number}</Text>
        <Text>{currentOperationalHour}</Text>
        <FoodPhotosComponent photos={restaurant.food_photos}/>
    </View>
  );
};

const FoodPhotosComponent: React.FC<{ photos: string[] }> = ({ photos }) => {
  console.log(photos[0])
  return (
    <ScrollView>
      {photos.map((photo, index) => (
        <View key={index} style={styles.restaurantContainer}>
          <Image source={{uri: photo}} style={styles.foodPhoto} />
        </View>
      ))}
      <Text>{photos.length}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    marginBottom: 20,
  },
  foodPhoto: {
    width: 200,
    height: 200,
  },
});


export default RestaurantInformationScreen;