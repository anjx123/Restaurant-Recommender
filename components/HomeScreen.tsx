import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantList from './RestaurantList';
import { Restaurant, StackParams } from './card';
import { StackNavigationProp } from '@react-navigation/stack';

type DrawerNavProp = DrawerNavigationProp<any>;


type HomeScreenProps = {
    restaurants: Restaurant[]; // Define the type of the 'restaurants' prop
  };

function HomeScreen({ restaurants }: HomeScreenProps) {
  const [backgroundColor, setBackgroundColor] = useState();
  const navigation = useNavigation<DrawerNavProp>();
  const stackNavigation = useNavigation<StackNavigationProp<StackParams, 'Home'>>();

  function handleIconClick() {
    navigation.openDrawer();
  }

  return (
    <RestaurantContext.Provider value={restaurants}>
      <View style={[styles.container, {backgroundColor}]}>
        {/* <View style={styles.menuBar}>
          <TouchableOpacity style={{padding: 10}} onPress={handleIconClick}>
            <FontAwesome name="bars" size={30} color="grey" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Restaurant Recommender</Text>
          <TouchableOpacity style={{padding: 10}} onPress={handleSearchClick}>
            <FontAwesome name="search" size={30} color="grey" />
          </TouchableOpacity>
        </View> */}
        <View>
          <RestaurantList navigation={stackNavigation}/>
        </View>
        <View>
          <Text>
            {restaurants.length}
          </Text>
        </View>
      </View>
    </RestaurantContext.Provider>
  );
}

  

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
  

const styles = StyleSheet.create({
    menuBar: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: screenWidth,
      borderWidth: 2, 
      borderColor: 'black',
      borderRadius: 5,
    },
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    titleText: {
      fontSize: screenWidth * .05,
      padding: screenWidth * .05,
      textAlign: 'center',
    },
  
  });
  

export default HomeScreen;
