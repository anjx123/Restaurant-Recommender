import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions,  } from 'react-native';


    type Clickhandler = () => void;

    interface CardProps {
        restaurant: Restaurant;
        handleClick: Clickhandler;
    }

    export type Restaurant = {
        name: string;
        description: string;
        _id: string;
        weighted_rating_value: number;
        local_hours: RestaurantHours;
    }

    interface RestaurantHours {
        operational: Record<string, string>;
        delivery: Record<string, string>;
        pickup: Record<string, string>;
        dine_in: Record<string, string>;
      }
    

    const RestaurantCard: React.FC<CardProps> = ({restaurant, handleClick}) => {
        
        const currentDate = new Date();
        const currentWeekday = currentDate.toLocaleDateString('en', { weekday: 'long' }).split(',')[0].trim();;
        const localHours = restaurant.local_hours;
        const currentOperationalHour = localHours?.operational?.[currentWeekday] ?? null;
        
        return (
            <View style={styles.cardTouch}>
                <TouchableOpacity style={styles.card} onPress={handleClick}>
                    <View>
                        <View style={styles.restaurantName}>
                            {restaurant.name !== null ? (
                                <Text>{restaurant.name}</Text>
                            ) : null}
                        </View>
                        <View>
                            {currentOperationalHour !== null ? (
                                <Text>{currentOperationalHour}</Text>
                            ) : null}
                        </View>
                        <Text>
                            {currentWeekday}
                        </Text>
                        <View>
                            {restaurant.weighted_rating_value <= 5 ? (
                                <Text>{restaurant.weighted_rating_value.toFixed(2)}</Text>
                            ) : null}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        )
    }

    const screenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
     card: {
       backgroundColor: 'white',
       borderRadius: 8,
       padding: 50,
       marginBottom: 20,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 4,
       elevation: 2, 
       width: screenWidth * 0.8,
     },
     cardTouch: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
     },
     restaurantName: {
     }

   });

   

   export default RestaurantCard;