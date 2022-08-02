/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { style } from '../themes/MovieCardTheme';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/GetColors';
import { GradientContext } from '../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const {setMainColors} = useContext(GradientContext)
    const { top } = useSafeAreaInsets();
    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();

    const getPosterColors = async( index: number ) => {
        const movie = nowPlaying[ index ]
        const urlSource = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`

        const [ primary = 'red', secondary = 'orange' ] = await getImageColors(urlSource)
        console.log(primary + ' --- ' + secondary)
        setMainColors({ primary, secondary })
    }

    useEffect( () => {
        if( nowPlaying.length > 0 ){
            getPosterColors(0)
        }
    }, [ nowPlaying ])
    
    if (isLoading) {
        return (
            <View style={{ flex:1, justifyContent:'center', alignContent: 'center'}}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <GradientBackground >

            <ScrollView>

                <View style={{ flex: 1, marginTop: top + 20 }}>
                    {/* Main Carousel  */}
                    <View style= {style.containerImage2 }>
                        <Carousel 
                            data={ nowPlaying }
                            renderItem= { ({item}) => <MovieCard movie={ item } /> }
                            sliderWidth= { windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors(index) }
                        />
                    </View>

                    <HorizontalSlider title='Popular' movies={popular} ></HorizontalSlider>
                    <HorizontalSlider title='Top Rated' movies={topRated} ></HorizontalSlider>
                    <HorizontalSlider title='UpComing' movies={upComing} />

                </View>
            </ScrollView>

        </GradientBackground>
        
        
    )
}



/*
<Button title="go Detail"
                onPress={ () => navigation.navigate('DetailScreen') }>

            </Button>*/
            
            