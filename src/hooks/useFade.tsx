
import {  useRef } from 'react';
import { Animated } from 'react-native';



export const useFade = () =>{

    const opacity = useRef( new Animated.Value(0) ).current

    const fadeIn = ( callback?: Function, duration = 300 ) => {

        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }
        ).start( () => callback ? callback() : null);
    }

    const fadeOut = ( duration = 300) => {

        Animated.timing(
            opacity, 
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }
        ).start();
    }

    return {
        opacity,
        fadeIn,
        fadeOut
    }

}