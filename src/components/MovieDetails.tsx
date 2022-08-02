import React from "react";
import { FlatList, Text, View } from "react-native";
import { ImovieDetail } from '../interfaces/movieDetails';
import { Cast } from '../interfaces/creditsInterface';
import  Icon  from 'react-native-vector-icons/Ionicons';
import currencyformatter from 'currency-formatter'
import { MovieActor } from "./MovieActor";


interface Props {
    movieDetails: ImovieDetail,
    cast: Cast[]
}


export const MovieDetails = ( { movieDetails, cast }: Props ) => {


    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{flexDirection:'row'}}>
                    <Icon name='star-outline'
                        size={20}
                        color='grey' />
                    <Text style={{ fontSize:15, marginHorizontal:15 }}>{ movieDetails.vote_average }</Text>

                        
                    <Text   >
                        - { movieDetails.genres.map( g => g.name ).join(', ') }
                    </Text>
                </View>

                {/* Siponsis */}
                <Text style={{ marginTop: 10, fontSize:23, fontWeight: 'bold'}} > Sinopsis </Text>
                <Text style={{ marginVertical: 10, fontSize: 16}}> { movieDetails.overview } </Text>

                {/* Presupuesto */}
                <Text style={{ marginTop: 10, fontSize:23, fontWeight: 'bold'}} > Presupuesto </Text>
                <Text style={{ marginVertical: 10, fontSize: 16}}> { currencyformatter.format(movieDetails.budget, {code:'USD'} ) } </Text>

                {/* Casting */}
                <View style={{marginBottom:100, paddingBottom:20}}>
                    <Text style={{ marginTop: 10, fontSize:23, fontWeight: 'bold'}} > Actores </Text>
                    <FlatList 
                        data={ cast }
                        keyExtractor={ ( item ) => item.id.toString() }
                        renderItem={ ({ item }) => <MovieActor actor={ item } /> }
                        horizontal={ true }
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                

            </View>
        
        </>

        
    )
}
