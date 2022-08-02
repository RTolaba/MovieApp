/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
import React from "react";
import { Animated, Button, View } from "react-native";
import { useFade } from '../hooks/useFade';






export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade()

    /*const opacity = useRef( new Animated.Value(0) ).current

    const fadeIn = () => {

        Animated.timing(
            opacity, 
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }

    const fadeOut = () => {

        Animated.timing(
            opacity, 
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }*/

    return (
        <View style={{ 
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <Animated.View style={{ 
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                marginBottom:10,
                opacity: opacity,
            }} >

            </Animated.View>

            <Button
            title="FadeIn"
            onPress={ () => fadeIn() }>

            </Button>

            <Button
            title="FadeOut"
            onPress={ () => fadeOut() }>

            </Button>

        </View>
    )
}