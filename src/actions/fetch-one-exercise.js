import axios from 'axios';
import {SET_EXERCISE, SET_SOLUTION} from './types';

export function fetchOneExercise(id) {
    return dispatch => {
        axios
            .get(`/exercises/${id}`)
            .then(res => {
                dispatch(handleExercise(res.data));
                dispatch(handleSolution(res.data));
            })
    }
}

export function putEditedExercise(data){
    console.log('from action',data)
    return dispatch=>{
        axios.put(`/exercises/${data.id}`).then(
            res=>{
                dispatch(handleExercise(res.data))
            }
        )
    }
}
export function putEditedSolution(data){
    return dispatch=>{
        axios.put(`/solution-groups/${data.id}`).then(
            res=>{
                dispatch(handleSolution(res.data))
            }
        )
    }
}

export function handleExercise(data) {
    let exercise = {
        id: data.id,
        question: data.question,
        sentence: data.sentence,
        exerciseType: data.exerciseType,
        rightAnswersNumber: data.rightAnswersNumber,
        wrongAnswersNumber: data.wrongAnswersNumber,
        solutionGroups: []
    }
    return {type: SET_EXERCISE, payload: exercise}
}

export function handleSolution(data) {
    let solution = {
        id: data.solutionGroups[0].id,
        category: {
            id: data.solutionGroups[0].category.id,
            value: data.solutionGroups[0].category.value,
            color: data.solutionGroups[0].category.color
        },
        groupParts: [
            {
                id: data.solutionGroups[0].groupParts[0].id,
                selectedWordIndex: data.solutionGroups[0].groupParts[0].selectedWordIndex
            }
        ]
    }
    return{type:SET_SOLUTION, payload:solution}
}