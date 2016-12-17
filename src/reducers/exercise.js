import{SET_EXERCISE,EDIT_EXERCISE}from '../actions/types';
import update from 'immutability-helper';

const initialState={
        id: '',
        question: '',
        sentence: '',
        exerciseType: '',
        rightAnswersNumber: '',
        wrongAnswersNumber: '',
        solutionGroups: []
}
export default function Exercise(state=initialState,action){
    switch(action.type){
        case SET_EXERCISE:
        const exercise = action.payload 
        return {...state,...exercise};
        case EDIT_EXERCISE:
        const sentence= action.payload
        return update(state,{
            sentence:{
                $set:sentence
            }
        });
        default: return state;
    }

}