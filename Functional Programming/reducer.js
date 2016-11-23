/**
 * Created by glenp on 23/11/2016.
 */

let initialState = 0;

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1;

        default:
            return state;
    }
}

module.exports = reducer;

// let state = reducer(0, {type: 'INCREMENT_COUNT'});
// console.log(state);
//
// result = reducer(state, {type: 'INCREMENT_COUNT'});
// console.log(result);
