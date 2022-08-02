/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { useNavigation } from "@react-navigation/native";


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

const screenHeight = Dimensions.get('screen').height 

export const DetailScreen = ( { route, navigation }: Props ) => {

    const movie = route.params
    const urlSource = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const {isLoading, cast, movieDetail} = useMovieDetails( movie.id )

    return (
        <ScrollView>

            <View style={styles.imageConatiner}>
            
                <Image
                    source={{ uri: urlSource }}
                    style={ styles.posterImage }
                />
            </View>

            <View>
                <Text style={styles.detailCardOriginalTitle} > {movie.original_title} </Text>
                <Text style={styles.detailCardTitle} > {movie.title} </Text>
            </View>

            <View style={{}}>

                {

                    (isLoading) ? <ActivityIndicator size={40} color='grey' />
                                : <MovieDetails movieDetails={movieDetail!} cast={cast} />
                }
            </View>

            {/* Close button */}
            <View style={styles.backButton} >
                <TouchableOpacity
                onPress={() => navigation.pop()} >
                    <Icon
                        color="black"
                        name="arrow-back-outline"
                        size={35}
                        
                    />
                </TouchableOpacity>
            </View>
            
            
            
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    imageConatiner:{
        width: '100%',
        height: screenHeight * 0.70,


        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 10,
        borderRadius: 50,
        
    },
    posterImage: {
        flex: 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    detailCardTitle:{
        marginBottom: 10,
        fontSize: 25,
        color: 'black',
        textAlign:'center',
        fontWeight: 'bold',
    },
    detailCardOriginalTitle: {
        marginTop: 10,
        fontSize:15,
        color: 'black',
        opacity: 0.6,
        textAlign:'center',
        fontWeight: 'bold',
    },
    backButton: {
        position:'absolute',
        zIndex:999,
        top:30,
        left:10,
        backgroundColor: 'red',
        borderRadius: 40,
        borderColor:'black',
        borderWidth:1,

        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 25,
    }

})