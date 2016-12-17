import {EDIT_EXERCISE, EDIT_SOLUTION_INDEX, EDIT_SOLUTION_CATEGORY} from './types';

export function editSentence(sentence) {
    return dispatch => {
        dispatch({type: EDIT_EXERCISE, payload: sentence})
    }
}

export function editCategory(value, color) {
    return dispatch => {
        dispatch({
            type: EDIT_SOLUTION_CATEGORY,
            payload: {
                value,
                color
            }
        })
    }
}

export function editWordIndex(index) {
    return dispatch => {
        dispatch({type: EDIT_SOLUTION_INDEX, payload: index})
    }
}
