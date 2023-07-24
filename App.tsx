import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Dimensions, TouchableOpacity, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './card';
import { ScrollView } from 'react-native';
  
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(buttonContainerBackgroundColor);

  function handleClick() {
    setBackgroundColor('blue');
  }

  function handleIconClick() {
    setBackgroundColor('green');
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
      <ScrollView>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleIconClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/> 
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
        <Card title="Amogus" content='Since 1900' handleClick={handleSearchClick}/>
      </ScrollView>
      <View>
        <Text>
          {screenWidth}
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
