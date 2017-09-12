/**
 * Created by hoangnd on 9/10/17.
 */
import FoodReducer from './foods-reducer';
import UserReducer from './users-reducer';
import ActiveFoodReducer from './active-food-reducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    activeFood: ActiveFoodReducer
});

export default allReducers;