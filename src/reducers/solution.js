import {SET_SOLUTION, EDIT_SOLUTION_INDEX, EDIT_SOLUTION_CATEGORY} from '../actions/types';
import update from 'immutability-helper';

const initialState = {
    id: '',
    category: {
        id: '',
        value: '',
        color: ''
    },
    groupParts: [
        {
            id: '',
            selectedWordIndex: ''
        }
    ]
}
export default function Exercise(state = initialState, action) {
    switch (action.type) {
        case SET_SOLUTION:
            const solution = action.payload
            return {
                ...state,
                ...solution
            }
        case EDIT_SOLUTION_CATEGORY:
            const category = action.payload
            return update(state, {
                category: {
                    value: {
                        $set: category.value
                    },
                    color: {
                        $set: category.color
                    }
                }
            })
        case EDIT_SOLUTION_INDEX:
            const index = action.payload
            return update(state, {
                groupParts: {
                    0: {
                        selectedWordIndex: {
                            $set: index
                        }
                    }
                }
            })
        default:
            return state;
    }
}