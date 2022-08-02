/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
import React from "react";
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';


interface Props {
    actor: Cast
}

export const MovieActor = ( { actor }: Props ) => {

    const urlSource = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={ styles.container }>
            {
                (actor.profile_path) && (
                    <Image
                        source={{ uri: urlSource}}
                        style={{ width:50, height: 50, borderRadius: 10}}
                    />
                )
            }
            
            <View style={ styles.actorInfo } >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}> { actor.original_name } </Text>
            
                <Text style={{ fontSize: 16, opacity: 0.7 }} > { actor.character } </Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 13,
    },
    actorInfo: {
        marginHorizontal: 10,
    }
})
