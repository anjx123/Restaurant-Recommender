import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurant } from './components/card';
import * as Location from 'expo-location';
import 'react-native-gesture-handler';
import StackNavigator from './components/navigation/stackNavigation';
import { RestaurantContext } from './context/RestaurantContext';
import { View, Text } from 'react-native';
import DrawerNavigator from './components/navigation/drawerNavigation';
import { NavigationContainer } from '@react-navigation/native';


//Todo List:
//Location handling
//Search Handling
//Make the card better by adding pictures and whatever


export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  function bif(bruh = 2) {
    console.log(bruh);
    return bruh;
  }


  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
  
    try {
      const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
      setLocation(position);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const apiKey = "0ba712cbd46a43089eca6bf1474177de";
    if (location) {
      const url = `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&lat=${location.coords.latitude}&lng=${location.coords.longitude}&number=0`;
      axios.get(url)
      .then(response => {
        setRestaurants(response.data.restaurants);
        console.log("search success");
      })
      .catch(error => {
        console.error(error);
      });
    } else {
        console.log("Location Not Given")
    }
    }, [location]);


  return (
    <RestaurantContext.Provider value={ restaurants }>
      <NavigationContainer>
          <StackNavigator/>
      </NavigationContainer>
    </RestaurantContext.Provider>
  );
  
}


