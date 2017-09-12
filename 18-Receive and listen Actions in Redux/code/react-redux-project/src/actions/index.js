/**
 * Created by hoangnd on 9/11/17.
 */

import {SELECT_FOOD} from './actionTypes';
//Action creator
export const selectFood = (food) => {
    console.log(`You clicked a food with name = ${food.name}`);
    return {
        type: SELECT_FOOD,
        payload: food
    };
}