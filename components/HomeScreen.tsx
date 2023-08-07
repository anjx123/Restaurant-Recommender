import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RestaurantList from './RestaurantList';

function HomeScreen() {


  return (
      <View style={[styles.container]}>
        <View>
          <RestaurantList />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
  });
  

export default HomeScreen;
