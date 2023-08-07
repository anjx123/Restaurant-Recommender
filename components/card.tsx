import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image  } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './navigation/stackNavigation';

    interface CardProps {
        restaurant: Restaurant;
    }

    export type Restaurant = {
        name: string;
        description: string;
        _id: string;
        weighted_rating_value: number;
        local_hours: RestaurantHours;
        phone_number: string;
        food_photos: string[];
    }

    interface RestaurantHours {
        operational: Record<string, string>;
        delivery: Record<string, string>;
        pickup: Record<string, string>;
        dine_in: Record<string, string>;
    }

    export function getCurrentOperationalHour(restaurant: Restaurant): string | null {
        const currentDate = new Date();
        const currentWeekday = currentDate.toLocaleDateString('en', { weekday: 'long' }).split(',')[0].trim();
        return restaurant.local_hours?.operational?.[currentWeekday] ?? null;
    }
    

    const RestaurantCard: React.FC<CardProps> = ({restaurant}) => {
        const currentOperationalHour = getCurrentOperationalHour(restaurant);

        const stackNavigation = useNavigation<StackNavigationProp<RootStackParamList>>();

        function handleClick() {
            stackNavigation.navigate('RestaurantInformation', { restaurant });
        }

        const restaurantPhoto: string = restaurant.food_photos[0];
        
        return (
            <View style={styles.cardTouch}>
                <TouchableOpacity style={styles.card} onPress={handleClick}>
                    <View>
                        <View>
                            <Image source={{uri: restaurantPhoto}} style={styles.foodPhoto}/>
                        </View>
                        <View style={styles.restaurantName}>
                            {restaurant.name !== null ? (
                                <Text>{restaurant.name}</Text>
                            ) : null}
                        </View>
                        <View>
                            {currentOperationalHour !== null ? (
                                <Text>Operational Hours: {currentOperationalHour}</Text>
                            ) : null}
                        </View>
                        <View>
                            {restaurant.weighted_rating_value <= 5 ? (
                                <Text>Rating: {restaurant.weighted_rating_value.toFixed(2)}</Text>
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
       padding: 30,
       marginBottom: 20,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 4,
       elevation: 2, 
       width: screenWidth * 0.8,
     },
     foodPhoto: {
       width: 100,
       height: 100,
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