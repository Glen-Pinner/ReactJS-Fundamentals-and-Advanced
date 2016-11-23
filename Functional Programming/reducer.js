/**
 * Created by glenp on 23/11/2016.
 */

let initialState = 0;

function reduce(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1;

        default:
            return state;
    }
}

let state = reduce(0, {type: 'INCREMENT_COUNT'});
console.log(state);

result = reduce(state, {type: 'INCREMENT_COUNT'});
console.log(result);
