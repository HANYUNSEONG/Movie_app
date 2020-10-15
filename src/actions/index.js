import axios from "axios";

const API_KEY = 'ae3ea9ff24e02870196d6254c68cf8e3';
const BASE_URL = 'https://api.themoviedb.org/3';

export const GET_NETFLIXORIGINAL = 'GET_NETFLIXORIGINAL';
export const GET_TOPRATED = 'GET_TOPRATED';

export const NetfilxOriginal = (data) => {
    return {
        type: GET_NETFLIXORIGINAL,
        data
    }
}

export const NetfilxOriginalData = () => {
    return (dispatch) => {
        // Netfilx Original
        return axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then(result => {
            dispatch(NetfilxOriginal(result))
        })
        .catch(err => {
            dispatch(Toprated("ERROR"))
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
        return axios.get(`${BASE_URL}/movie/top_rated?api_keay=${API_KEY}&language=en-US`)
        .then(result => {
            dispatch(Toprated(result, "SUCCESS"))
        })
        .catch(err => {
            dispatch(Toprated(err, "ERROR"))
        })
    }
}