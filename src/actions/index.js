import axios from "axios";

const API_KEY = 'ae3ea9ff24e02870196d6254c68cf8e3';
const BASE_URL = 'https://api.themoviedb.org/3';

export const TEST_DATA = 'TEST_DATA';

export const testData = (data) => {
    return {
        type: TEST_DATA,
        data
    }
}

export const testDataGet = () => {
    return (dispatch) => {
        return axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then(data => {
            dispatch(testData(data))
        })
        .catch(err => {
            console.error(err)
        })
    }
}