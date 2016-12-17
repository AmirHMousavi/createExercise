import{FETCH_ALL_EXERCISES}from '../actions/types';
import _ from 'lodash';
export default function AllExercises(state={},action){
    switch(action.type){
        case FETCH_ALL_EXERCISES:
        const exercises = _.mapKeys(action.payload, 'id'); 
        return {...state,...exercises}
        default: return state;
    }
}