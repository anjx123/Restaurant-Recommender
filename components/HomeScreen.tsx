import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import RestaurantList from './RestaurantList';

function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState();


  return (
      <View style={[styles.container, {backgroundColor}]}>
        <View>
          <RestaurantList />
        </View>
      </View>
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
