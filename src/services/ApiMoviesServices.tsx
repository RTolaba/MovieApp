/* eslint-disable semi */

import axios from "axios"


//'https://api.themoviedb.org/3/movie/now_playing?api_key=13ed219e844f97e6fe64e0084fd33aac&language=en-US&page=1'

//export const ApiMoviesServices = () => {

    const APIURL = 'https://api.themoviedb.org/3/movie'
    const APIKEY = '13ed219e844f97e6fe64e0084fd33aac'
    const APILang = 'es-ES'
    const apiMovies = axios.create({
        baseURL: APIURL,
        params: {
            api_key: APIKEY,
            language: APILang,
        },
    })

    //axios.get(`${APIURL}/now_playing?api_key=${APIKEY}&language=${APILang}&page=1`)


 //   return apiMovies

//}

export default apiMovies


