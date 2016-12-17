import {FETCH_ALL_CATEGORIES} from '../actions/types';

export default function categories(state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            const categoryList = action.payload;
            return {
                ...state,
                ...categoryList
            };
        default:
            return state;
    }
}