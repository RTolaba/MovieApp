/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { ImovieResponseInterface, Movies } from '../interfaces/movieNowPlayingInterface';
import apiMovies from '../services/ApiMoviesServices';

interface MoviesState {
    nowPlaying: Movies[]
    popular: Movies[]
    topRated: Movies[]
    upComing: Movies[]
}

export const useMovies = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [ moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
    })

    const getMovies = async () => {

        const nowPlayingPromise = apiMovies.get<ImovieResponseInterface>('/now_playing')
        const popularPromise = apiMovies.get<ImovieResponseInterface>('/popular')
        const topRatedPromise = apiMovies.get<ImovieResponseInterface>('/top_rated')
        const upComingPromise = apiMovies.get<ImovieResponseInterface>('/upcoming')

        const resps = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise,
        ])

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upComing: resps[3].data.results,

        })

        setIsLoading(false)
    }

    useEffect( () => {
        //now_playing
        getMovies()
    }, [] )

    return {
        ...moviesState,
        isLoading,
    }
}


