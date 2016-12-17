import {FETCH_ALL_CATEGORIES} from './types';
import {PARTS_OF_SPEECH_CATEGORY_LIST} from '../category/category-list-for-exercises';

export function fetchAllCategories() {
    return dispatch => {
        dispatch({type: FETCH_ALL_CATEGORIES, payload:PARTS_OF_SPEECH_CATEGORY_LIST})
    }
}