import React from "react";
import { FlatList, Text, View } from "react-native";
import { Movies } from '../interfaces/movieNowPlayingInterface';
import { MovieCard } from './MovieCard';


interface Props {
    title?: string
    movies: Movies[]
}

export const HorizontalSlider = ({ title, movies }: Props ) => {


    return (
        <View style={{ height: 250, marginVertical: 5}}>
            
            {
                title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, color: 'black' }}> {title} </Text>
            }
            <FlatList 
                data={ movies }
                renderItem={  ({ item }: any ) => (
                    <MovieCard movie={ item } width={ 140 } height={ 200 } marginHorizontal={8} />
                    ) }
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}
