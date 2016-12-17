import {SET_EXERCISE, SET_SOLUTION} from './types';
import {PART_OF_SPEECH} from '../exercise-creation/exercise-types';

export function createEmptyExercise(exeType) {
    switch (exeType) {
        case PART_OF_SPEECH:
            return dispatch => {
                dispatch(emptyPartOfSpeechExercise());
                dispatch(emptyPartOfSpeechSolution());
            }
        default: return  'no such type of exercise';
    }
}

export function emptyPartOfSpeechExercise(){
        let exercise = {
        id: 0,
        question: 'Bestäm det markerade ord.',
        sentence: null,
        exerciseType: 'PART_OF_SPEECH',
        rightAnswersNumber: 0,
        wrongAnswersNumber: 0,
        solutionGroups: []
    }
    return {type: SET_EXERCISE, payload: exercise}
}
export function emptyPartOfSpeechSolution(){
        let solution = {
        id: 0,
        category: {
            id: 0,
            value: null,
            color: null
        },
        groupParts: [
            {
                id: 0,
                selectedWordIndex: null
            }
        ]
    }
    return {type: SET_SOLUTION, payload: solution}
}