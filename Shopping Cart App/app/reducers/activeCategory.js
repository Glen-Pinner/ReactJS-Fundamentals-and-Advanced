/**
 * Created by glenp on 23/11/2016.
 */

import { CHANGE_CATEGORY } from '../constants/action-types';

let initialState = 'food';

export default function activeCategory(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return action.payload;

        default:
            return state;
    }
}
