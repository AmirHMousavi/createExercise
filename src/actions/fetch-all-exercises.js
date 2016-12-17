import axios from 'axios';
import {FETCH_ALL_EXERCISES} from './types';

export function fetchAllExercises() {
    return dispatch => {
        axios.get('/exercises')
            .then(res => {
                dispatch({type: FETCH_ALL_EXERCISES, payload: res.data})
            });
    }
}