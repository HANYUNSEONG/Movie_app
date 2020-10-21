import axios from "axios";

const API_KEY = 'ae3ea9ff24e02870196d6254c68cf8e3';
const BASE_URL = 'https://api.themoviedb.org/3';

export const GET_NETFLIXORIGINAL = 'GET_NETFLIXORIGINAL';
export const GET_TOPRATED = 'GET_TOPRATED';
export const GET_TREND = 'GET_TREND';
export const GET_MOVIEIDSEARCH = 'GET_MOVIEIDSEARCH';

export const NetfilxOriginal = (data) => {
    return {
        type: GET_NETFLIXORIGINAL,
        data
    }
}

export const NetfilxOriginalData = () => {
    return (dispatch) => {
        // Netfilx Original
        return axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko-KR&with_networks=213`)
        .then(result => {
            dispatch(NetfilxOriginal(result, "SUCCESS"))
        })
        .catch(err => {
            dispatch(Toprated(err, "ERROR"))
        })
    }
}

export const Toprated = (data, status) => {
    return {
        type: GET_TOPRATED,
        data,
        status
    }
}

export const TopratedData = () => {
    return (dispatch) => {
        // Top Rated
        return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`)
        .then(result => {
            dispatch(Toprated(result, "SUCCESS"))
        })
        .catch(err => {
            dispatch(Toprated(err, "ERROR"))
        })
    }
}

export const Trend = (data, status) => {
    return {
        type: 'GET_TREND',
        data,
        status
    }
}

export const TrendData = () => {
    return (dispatch) => {
        // Trend
        return axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ko-KR`)
        .then(result => {
            dispatch(Trend(result, 'SUCCESS'))
        })
        .catch(err => {
            dispatch(Trend(err, 'ERROR'))
        })
    }
}

export const MovieIdSearch = (data, status) => {
    return {
        type: 'GET_MOVIEIDSEARCH',
        data,
        status
    }
}

export const MovieIdSearchData = (id) => {
    return (dispatch) => {
        return axios.get(`${BASE_URL}/movie/${id}&language=ko-KR`)
        .then(result => {
            dispatch(MovieIdSearch(result, 'SUCCESS'))
        })
        .catch(err => {
            dispatch(MovieIdSearch(err, 'ERROR'))
        })
    }
}