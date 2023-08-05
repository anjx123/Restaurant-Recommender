
import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import RestaurantCard from './card';
import { RestaurantContext } from '../context/RestaurantContext';


const RestaurantList = () => {
    const restaurants = useContext(RestaurantContext);
    
    return (
        <React.Fragment>
            {restaurants.length == 0 ? (
                <Text>"Loading"</Text>
            ) : (<ScrollView> 
                {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant}/>
                ))}
            </ScrollView>)}
        </React.Fragment> 
    )
}

export default RestaurantList;