/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
import React from "react";
import { View, Image } from 'react-native';
import { style } from "../themes/MovieCardTheme";
import { Movies } from '../interfaces/movieNowPlayingInterface';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from "react-native-gesture-handler";


interface Props{
    movie:Movies
    height?: number
    width?: number
    marginHorizontal?: number
}


export const MovieCard = ( { movie, height = 450, width = 300, marginHorizontal = 0 }: Props ) => {

    const navigation = useNavigation()
    const imgSource = `https://image.tmdb.org/t/p/w500${movie.poster_path}` 

    return (
        <TouchableOpacity 
            onPress={ () => navigation.navigate('DetailScreen' as never, movie as never) }
            activeOpacity={0.9}
            style={{
                width: width,
                height: height,
                marginHorizontal: marginHorizontal,
                paddingBottom: 20,
            }}>
            {/*<Text style= { style.cardTitle }> { movie.title } </Text>*/}
            
            <View style={  style.containerImage }>
                <Image 
                    source={{ uri: imgSource }} 
                    style={ style.cardImage} />
            </View>
            
        </TouchableOpacity>
    )
}

