import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from '../actions/types';

export default function FlashMessage(state = {}, action){
    switch(action.type){
        case ADD_FLASH_MESSAGE:
        const type=action.payload.type;
        const text=action.payload.text;
        return{...state,...{type,text}}
        case DELETE_FLASH_MESSAGE:
        return {}
        default: return state;
    }
} 