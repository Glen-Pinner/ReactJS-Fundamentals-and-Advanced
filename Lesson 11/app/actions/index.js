/**
 * Created by glenp on 23/11/2016.
 */

import {INCREMENT_COUNT} from '../constants/action-types';

function incrementCount() {
    return {
        type: INCREMENT_COUNT
    };
}

export {incrementCount};