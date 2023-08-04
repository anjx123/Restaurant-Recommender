import { RouteProp } from '@react-navigation/native';
import { StackParams } from './card';
import { View, Text } from 'react-native';

type RestaurantInformationScreenRouteProp = RouteProp<
  StackParams,
  'RestaurantInformation'
>;

interface RestaurantInformationScreenProps {
  route: RestaurantInformationScreenRouteProp;
}

const RestaurantInformationScreen: React.FC<RestaurantInformationScreenProps> = ({
  route,
}) => {
  const { restaurant } = route.params;

  


  return (
    <View>
        <Text>"Amogus" + {restaurant._id}</Text>
    </View>
  );
};

export default RestaurantInformationScreen;