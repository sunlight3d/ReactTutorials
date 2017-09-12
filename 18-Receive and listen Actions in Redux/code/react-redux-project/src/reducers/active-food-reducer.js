/**
 * Created by hoangnd on 9/12/17.
 */
import {SELECT_FOOD} from '../actions/actionTypes';
export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_FOOD:
            return action.payload;
        default:
            return {};
    }
    return {};
}