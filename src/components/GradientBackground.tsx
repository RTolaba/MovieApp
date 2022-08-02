/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';



interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ( { children }: Props) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFade()

    useEffect( () => {
        fadeIn( () => {
            setPrevMainColors( colors )
            fadeOut(0)
        }, 500 )

    }, [ colors ])

    return (
        <View style={{ flex: 1, }}>
            <LinearGradient colors={[ prevColors.primary, prevColors.secondary , 'white' ]} 
            style={{...StyleSheet.absoluteFillObject}}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x:0.65, y:0.8 }}
            />

            <Animated.View
                style={{ 
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient colors={[ colors.primary, colors.secondary , 'white' ]} 
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x:0.65, y:0.8 }}
                />
            </Animated.View>

            { children }
        </View>
    )
}