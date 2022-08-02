/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
// eslint-disable-next-line no-trailing-spaces


import apiMovies from "../services/ApiMoviesServices"
import { ImovieDetail } from '../interfaces/movieDetails';
import { useEffect, useState } from "react";
import { Cast, IMoviecredits } from '../interfaces/creditsInterface';


interface MovieDetails {
    isLoading: boolean
    movieDetail?: ImovieDetail
    cast: Cast[]
}


export const useMovieDetails = ( id: number ) => {

    const [movie, setMovie] = useState<MovieDetails>({
        isLoading: true,
        movieDetail: undefined,
        cast: []
    })

    const getMovieDetails = async() => {
        const movieDetailPromise = apiMovies.get<ImovieDetail>( `/${id}` )
        const castPromise = apiMovies.get<IMoviecredits>( `/${id}/credits` )
        
        const [ movieDetailsResponse, castPromiseResponse ] = await Promise.all([ movieDetailPromise, castPromise])
    
        setMovie({
            isLoading: false,
            movieDetail: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }

    useEffect( () => {
        getMovieDetails();
    })

    return {
        ...movie
    }
    
}