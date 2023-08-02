import { View, Text, StyleSheet, } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RestaurantList from "./RestaurantList";


const Drawer = createDrawerNavigator();

export default function NavigationMenu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={RestaurantList} />
                {/* Other screens can be added here */}
            </Drawer.Navigator>
        </NavigationContainer>
      );
    }

  const styles = StyleSheet.create({
  menuText: {

  },

  sideMenuContainer: {

  },
});