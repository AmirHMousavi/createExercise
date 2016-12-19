import axios from 'axios';
import {addFlashMessage} from './flash-messages';
import {SET_EXERCISE, SET_SOLUTION} from './types';

export function fetchOneExercise(id) {
    return dispatch => {
        axios.get(`/exercises/${id}`).then(
            res => {
                dispatch(handleExercise(res.data));
                dispatch(handleSolution(res.data));
            })
    }
}

export function deleteOneExercise(key) {
    return dispatch => {
        axios.delete(`/exercises/${key}`).then(
            (res, err) => {
            })

    }
}

export function putEditedExercise(data) {
    return dispatch => {
        axios
            .put(`/exercises/${data.id}`, data)
            .then((res, err) => {
            })
    }
}
export function putEditedSolution(data) {
    return dispatch => {
        axios.put(`/solution-groups/${data.id}`, data).then(
            res => {
                dispatch(addFlashMessage({type:'success', text:'övning uppdaterats'}));
            }).catch(
                err =>{
                    dispatch(addFlashMessage({type:'alert',text:'OBS! något fel'}));
                }
            )
    }
}

export function postNewExercise(exerciseData, solutionData) {
    return dispatch => {
        axios.post('/exercises', exerciseData).then(
            (res, err) => {
                dispatch(postNewSolution(solutionData,res.data.id))
            })
    }
}
export function postNewSolution(solutionData,_id) {
    return dispatch => {
        axios.post(`/solution-groups/${_id}`, solutionData).then(
            res => {
                dispatch(addFlashMessage({type:'success', text:'övning skapade'}));
            }).catch(
                err=>{
                    dispatch(addFlashMessage({type:'alert',text:'OBS! något fel'}));
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
    return {type: SET_SOLUTION, payload: solution}
}