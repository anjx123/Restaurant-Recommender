import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions,  } from 'react-native';

    type Clickhandler = () => void;

    interface CardProps {
        title: string;
        content: string;
        handleClick: Clickhandler;
    }

    const Card: React.FC<CardProps> = ({title, content, handleClick}) => {
        return (
            <View style={styles.cardTouch}>
                <TouchableOpacity style={styles.card} onPress={handleClick}>
                    <Text>{title}</Text>
                    <Text>{content}</Text>
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
     }
   });

   export default Card;