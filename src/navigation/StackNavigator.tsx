import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movies } from '../interfaces/movieNowPlayingInterface';

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: Movies
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  return (
        <Stack.Navigator
            
            screenOptions={{
                headerShown:false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );  
};
