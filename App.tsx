import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Dimensions, TouchableOpacity, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RestaurantCard from './card';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { Restaurant } from './card';
import { PermissionsAndroid } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import * as Location from 'expo-location';




//Todo List:
//Location handling
//Search Handling
//Make the card better by adding pictures and whatever

    

  
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(buttonContainerBackgroundColor);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('Geolocation permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

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
      const url = `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&lat=${location.coords.latitude}&lng=${location.coords.longitude}&budget=20&number=5`;
      axios.get(url)
      .then(response => {
        setRestaurants(response.data.restaurants.slice(0,5));
        console.log("search success");
      })
      .catch(error => {
        console.error(error);
      });
    } else {
        console.log("Location Not Given")
    }
    }, [location]);

  function handleClick() {
    setBackgroundColor('blue');
  }

  function handleIconClick() {
    setBackgroundColor('green');
    console.log(restaurants);
  }

  function handleSearchClick() {
    setBackgroundColor('red');
  }

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.menuBar}>
        <TouchableOpacity style={{padding: 10}} onPress={handleIconClick}>
          <FontAwesome name="bars" size={30} color="grey" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Restaurant Recommender</Text>
        <TouchableOpacity style={{padding: 10}} onPress={handleSearchClick}>
          <FontAwesome name="search" size={30} color="grey" />
        </TouchableOpacity>
      </View>
      {restaurants.length == 0 ? (
        <Text>"Loading"</Text>
      ) : (<ScrollView> 
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} handleClick={handleSearchClick}/>
        ))}
      </ScrollView>)}
      <View>
        <Text>
          {restaurants.length}
        </Text>
      </View>
    </View>
  );
  
}

  

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonContainerBackgroundColor = '#ffbc40';

const styles = StyleSheet.create({
  menuBar: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: screenWidth,
    borderWidth: 2, 
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#ffbc40',
  },
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  titleText: {
    color: 'red',
    fontSize: screenWidth * .05,
    padding: screenWidth * .05,
    textAlign: 'center',
  },

});
