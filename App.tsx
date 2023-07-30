import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Dimensions, TouchableOpacity, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RestaurantCard from './card';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { Restaurant } from './card';
import { PermissionsAndroid } from 'react-native';


    //Todo List:
    //Location handling
    //Search Handling
    //Make the card better by adding pictures and whatever

  
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(buttonContainerBackgroundColor);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);


  useEffect(() => {
    const apiKey = "0ba712cbd46a43089eca6bf1474177de";
    const url = `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&budget=20&number=5`;


    axios.get(url)
    .then(response => {
      setRestaurants(response.data.restaurants.slice(0,5));
      console.log("search success");
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

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
