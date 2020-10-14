import axios from "axios";

const API_KEY = 'ae3ea9ff24e02870196d6254c68cf8e3';
const BASE_URL = 'https://api.themoviedb.org/3';

export const GET_NETFLIXORIGINAL = 'GET_NETFLIXORIGINAL';

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
        .then(data => {
            dispatch(NetfilxOriginal(data))
        })
        .catch(err => {
            console.error(err)
        })
    }
}