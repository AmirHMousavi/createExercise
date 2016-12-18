import {combineReducers} from 'redux';
import AllExercises from './reducers/all-exercises';
import AllCategories from './reducers/all-categories';
import Exercise from './reducers/exercise';
import Solution from './reducers/solution';


export default combineReducers({AllExercises,AllCategories,Exercise,Solution});