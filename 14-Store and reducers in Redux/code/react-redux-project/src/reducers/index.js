/**
 * Created by hoangnd on 9/10/17.
 * Combine Reducers
 */

import {combineReducers} from 'redux';
import FoodReducer from './foods-reducer'
import UserReducer from './users-reducer'

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer
});

export default allReducers;