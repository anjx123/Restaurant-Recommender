import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurant } from './components/card';
import * as Location from 'expo-location';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './components/HomeScreen';
import Recommender from './components/Recommender';




//Todo List:
//Location handling
//Search Handling
//Make the card better by adding pictures and whatever


const Drawer = createDrawerNavigator();
  
export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

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

  function handleIconClick() {
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {props => <HomeScreen {...props} restaurants={restaurants} />}
        </Drawer.Screen>
        <Drawer.Screen name="Other" component={Recommender} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}


