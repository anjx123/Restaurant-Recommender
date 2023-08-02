
import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import RestaurantCard from './card';
import { RestaurantContext } from '../context/RestaurantContext';



import { useNavigation } from '@react-navigation/native';

export default function RestaurantList() {
    const restaurants = useContext(RestaurantContext);
    function handleSearchClick() {
    }
    // const uniqueRestaurants = Array.from(restaurants
    //     .map(restaurant => [restaurant])
    //     .reduce((accumulator, restaurant) => 
    //       accumulator.set(restaurant[0]._id, restaurant[0]), new Map()).values()); Prevents duplicate id's

    return (
        <React.Fragment>
            {restaurants.length == 0 ? (
                <Text>"Loading"</Text>
            ) : (<ScrollView> 
                {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} handleClick={handleSearchClick}/>
                ))}
            </ScrollView>)}
        </React.Fragment> 
    )
}